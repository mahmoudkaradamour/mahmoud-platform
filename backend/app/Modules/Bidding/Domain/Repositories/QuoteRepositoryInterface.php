<?php

namespace App\Modules\Bidding\Domain\Repositories;

use App\Modules\Bidding\Infrastructure\Models\MerchantQuote;

/**
 * Domain Repository Interface for Merchant Quotes.
 * Defines the contract for persistence without being coupled to Eloquent.
 */
interface QuoteRepositoryInterface
{
    public function findById(string $id): ?MerchantQuote;
    public function save(MerchantQuote $quote): bool;
    public function rejectOthersForRequest(string $requestId, string $acceptedQuoteId): int;
}
