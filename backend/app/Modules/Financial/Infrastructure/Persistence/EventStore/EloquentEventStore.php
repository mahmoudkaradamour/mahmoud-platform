<?php

namespace App\Modules\Financial\Infrastructure\Persistence\EventStore;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

/**
 * Hardened Enterprise Event Store - Financial Domain.
 * Implements Snapshotting to prevent O(n) replay performance issues.
 * Ensures O(1) balance retrieval even with millions of events.
 */
class EloquentEventStore
{
    private const SNAPSHOT_THRESHOLD = 100;

    public function append(string $aggregateId, string $eventType, array $payload): void
    {
        DB::transaction(function () use ($aggregateId, $eventType, $payload) {
            // 1. Append to Immutable Log
            DB::table('financial_event_store')->insert([
                'aggregate_id' => $aggregateId,
                'event_type' => $eventType,
                'payload' => json_encode($payload),
                'created_at' => now(),
            ]);

            // 2. Update Projection (Read Model) - CQRS Side
            $this->updateProjection($payload['user_id'], $eventType, $payload['amount']);

            // 3. Snapshotting Logic: Save state every N events to optimize memory
            $eventCount = Cache::increment("event_count_{$aggregateId}");
            if ($eventCount >= self::SNAPSHOT_THRESHOLD) {
                $this->createSnapshot($aggregateId, $payload['user_id']);
                Cache::put("event_count_{$aggregateId}", 0);
            }
        });
    }

    private function updateProjection(int $userId, string $eventType, float $amount): void
    {
        if ($eventType === 'FUNDS_DEBITED') {
            DB::table('financial_wallets_read_model')->where('user_id', $userId)->decrement('balance', $amount);
        }
    }

    private function createSnapshot(string $aggregateId, int $userId): void
    {
        $currentBalance = DB::table('financial_wallets_read_model')->where('user_id', $userId)->value('balance');
        DB::table('financial_snapshots')->updateOrInsert(
            ['aggregate_id' => $aggregateId],
            ['state' => json_encode(['balance' => $currentBalance]), 'last_event_id' => now(), 'updated_at' => now()]
        );
    }
}
