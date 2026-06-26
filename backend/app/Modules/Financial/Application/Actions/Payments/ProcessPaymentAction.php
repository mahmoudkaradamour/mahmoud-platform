<?php

namespace App\Modules\Financial\Application\Actions\Payments;

use App\Modules\Financial\Infrastructure\Models\Transaction;
use App\Modules\Catalog\Infrastructure\Models\InventoryMatrix;
use Illuminate\Support\Facades\DB;
use App\Modules\Financial\Infrastructure\Services\DataReconciliationService;

/**
 * Enterprise Payment Processor - Hardened Edition.
 * Implements Pessimistic Locking and Multi-DB Consistency Checks.
 */
class ProcessPaymentAction
{
    public function execute(int $userId, string $orderId, float $amount): bool
    {
        return DB::transaction(function () use ($userId, $orderId, $amount) {
            // 1. Pessimistic Lock on Wallet/Transaction record
            $wallet = DB::table('financial_wallets')
                ->where('user_id', $userId)
                ->lockForUpdate()
                ->first();

            if ($wallet->balance < $amount) {
                throw new \Exception("Insufficient sovereign funds.");
            }

            // 2. PostgreSQL Transactional Step
            DB::table('financial_wallets')->where('user_id', $userId)->decrement('balance', $amount);

            $transaction = Transaction::create([
                'user_id' => $userId,
                'order_id' => $orderId,
                'amount' => $amount,
                'type' => 'DEBIT',
                'status' => 'COMPLETED'
            ]);

            // 3. MongoDB Inventory Sync (The Consistency Risk Zone)
            try {
                // In production, this variant ID would come from the order payload
                $inventory = InventoryMatrix::where('product_id', $orderId)->first();
                if ($inventory && $inventory->quantity > 0) {
                    $inventory->decrement('quantity');
                } else {
                    throw new \Exception("Inventory depleted during transaction.");
                }
            } catch (\Exception $e) {
                // 4. Fallback: Log for Reconciliation Engine (The Saga approach)
                app(DataReconciliationService::class)->markForCorrection($transaction->id, 'MONGODB_SYNC_FAILURE');
                // We DON'T necessarily rollback Postgres if the money is taken,
                // but we flag it for the "Ghost Data" cleaner.
                throw $e;
            }

            return true;
        });
    }
}
