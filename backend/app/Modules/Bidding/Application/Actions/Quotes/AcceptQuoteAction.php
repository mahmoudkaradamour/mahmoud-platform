<?php

namespace App\Modules\Bidding\Application\Actions\Quotes;

use App\Modules\Bidding\Infrastructure\Models\MerchantQuote;
use App\Modules\Bidding\Infrastructure\Models\ProductRequest;
use Illuminate\Support\Facades\DB;

class AcceptQuoteAction
{
    public function execute(string $quoteId): MerchantQuote
    {
        return DB::transaction(function () use ($quoteId) {
            $quote = MerchantQuote::findOrFail($quoteId);
            $request = $quote->request;

            // 1. Accept the chosen quote
            $quote->update(['status' => 'ACCEPTED']);

            // 2. Mark the request as accepted
            $request->update(['status' => 'ACCEPTED']);

            // 3. Reject other quotes for the same request
            MerchantQuote::where('request_id', $request->id)
                ->where('id', '!=', $quoteId)
                ->update(['status' => 'REJECTED']);

            return $quote;
        });
    }
}
