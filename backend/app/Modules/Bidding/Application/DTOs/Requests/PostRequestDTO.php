<?php

namespace App\Modules\Bidding\Application\DTOs\Requests;

class PostRequestDTO
{
    public function __construct(
        public readonly int $customerId,
        public readonly string $title,
        public readonly string $description,
        public readonly ?float $budgetLimit,
        public readonly string $currency = 'USD'
    ) {}

    public static function fromRequest(array $data, int $customerId): self
    {
        return new self(
            customerId: $customerId,
            title: $data['title'],
            description: $data['description'],
            budgetLimit: isset($data['budget_limit']) ? (float) $data['budget_limit'] : null,
            currency: $data['currency'] ?? 'USD'
        );
    }
}
