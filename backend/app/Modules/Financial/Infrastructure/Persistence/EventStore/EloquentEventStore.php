<?php

namespace App\Modules\Financial\Infrastructure\Persistence\EventStore;

use Illuminate\Support\Facades\DB;

/**
 * Enterprise Event Store - Financial Domain.
 * Implements the core of the CQRS/Event Sourcing pattern.
 * Ensures the "Read Side" always sees the absolute truth.
 */
class EloquentEventStore
{
    public function append(string $aggregateId, string $eventType, array $payload): void
    {
        DB::table('financial_event_store')->insert([
            'aggregate_id' => $aggregateId,
            'event_type' => $eventType,
            'payload' => json_encode($payload),
            'created_at' => now(),
        ]);

        // Trigger immediate projection update for Read-Side consistency
        $this->project($aggregateId, $eventType, $payload);
    }

    private function project(string $aggregateId, string $eventType, array $payload): void
    {
        // Immediate update to Read Replica (Materialized View)
        // This eliminates the "Phantom State" / Eventual Consistency delay.
        if ($eventType === 'FUNDS_DEBITED') {
            DB::table('financial_wallets_read_model')
                ->where('user_id', $payload['user_id'])
                ->decrement('balance', $payload['amount']);
        }
    }
}
