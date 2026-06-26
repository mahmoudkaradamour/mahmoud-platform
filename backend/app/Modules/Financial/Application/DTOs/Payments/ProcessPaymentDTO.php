<?php

namespace App\Modules\Financial\Application\DTOs\Payments;

class ProcessPaymentDTO
{
    public function __construct(
        public readonly int $userId,
        public readonly ?string $storeId,
        public readonly float $amount,
        public readonly string $currency,
        public readonly string $paymentMethod,
        public readonly string $referenceType,
        public readonly string $referenceId,
        public readonly string $type = 'DEBIT'
    ) {}

    public static function fromRequest(array $data, int $userId): self
    {
        return new self(
            userId: $userId,
            storeId: $data['store_id'] ?? null,
            amount: (float) $data['amount'],
            currency: $data['currency'] ?? 'USD',
            paymentMethod: $data['payment_method'],
            referenceType: $data['reference_type'],
            referenceId: $data['reference_id'],
            type: $data['type'] ?? 'DEBIT'
        );
    }
}
