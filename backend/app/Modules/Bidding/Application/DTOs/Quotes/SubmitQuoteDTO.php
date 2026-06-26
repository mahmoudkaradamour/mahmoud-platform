<?php

namespace App\Modules\Bidding\Application\DTOs\Quotes;

class SubmitQuoteDTO
{
    public function __construct(
        public readonly string $requestId,
        public readonly int $merchantUserId,
        public readonly string $storeId,
        public readonly float $offeredPrice,
        public readonly string $offeredSpecs,
    ) {}

    public static function fromRequest(array $data, int $userId): self
    {
        return new self(
            requestId: $data['request_id'],
            merchantUserId: $userId,
            storeId: $data['store_id'],
            offeredPrice: (float) $data['offered_price'],
            offeredSpecs: $data['offered_specs'],
        );
    }
}
