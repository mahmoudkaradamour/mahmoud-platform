<?php

namespace App\Modules\Financial\Application\Actions\Payments;

use App\Modules\Financial\Application\DTOs\Payments\ProcessPaymentDTO;
use App\Modules\Financial\Infrastructure\Models\Transaction;
use Illuminate\Support\Facades\DB;

class ProcessPaymentAction
{
    public function execute(ProcessPaymentDTO $dto): Transaction
    {
        return DB::transaction(function () use ($dto) {
            $transaction = Transaction::create([
                'user_id' => $dto->userId,
                'store_id' => $dto->storeId,
                'amount' => $dto->amount,
                'currency' => $dto->currency,
                'payment_method' => $dto->paymentMethod,
                'reference_type' => $dto->referenceType,
                'reference_id' => $dto->referenceId,
                'type' => $dto->type,
                'status' => 'PENDING',
            ]);

            // Simulation of payment gateway bridge logic
            if ($dto->paymentMethod === 'CASH') {
                $transaction->update(['status' => 'COMPLETED']);
            }

            return $transaction;
        });
    }
}
