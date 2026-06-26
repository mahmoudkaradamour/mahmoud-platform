<?php

namespace App\Modules\Bidding\Infrastructure\Persistence;

use App\Modules\Bidding\Domain\Repositories\QuoteRepositoryInterface;
use App\Modules\Bidding\Infrastructure\Models\MerchantQuote;

/**
 * Infrastructure implementation of QuoteRepository using Laravel Eloquent.
 */
class EloquentQuoteRepository implements QuoteRepositoryInterface
{
    public function findById(string $id): ?MerchantQuote
    {
        return MerchantQuote::find($id);
    }

    public function save(MerchantQuote $quote): bool
    {
        return $quote->save();
    }

    public function rejectOthersForRequest(string $requestId, string $acceptedQuoteId): int
    {
        return MerchantQuote::where('request_id', $requestId)
            ->where('id', '!=', $acceptedQuoteId)
            ->update(['status' => 'REJECTED']);
    }
}
