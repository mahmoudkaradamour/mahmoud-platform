<?php

namespace App\Modules\Bidding\Application\Actions\Quotes;

use App\Modules\Bidding\Application\DTOs\Quotes\SubmitQuoteDTO;
use App\Modules\Bidding\Infrastructure\Models\MerchantQuote;
use App\Modules\Bidding\Infrastructure\Models\ProductRequest;
use Illuminate\Validation\ValidationException;

class SubmitQuoteAction
{
    public function execute(SubmitQuoteDTO $dto): MerchantQuote
    {
        $request = ProductRequest::findOrFail($dto->requestId);

        if ($request->status !== 'OPEN') {
            throw ValidationException::withMessages([
                'request_id' => ['This request is no longer open for bids.'],
            ]);
        }

        return MerchantQuote::create([
            'request_id' => $dto->requestId,
            'merchant_user_id' => $dto->merchantUserId,
            'store_id' => $dto->storeId,
            'offered_price' => $dto->offeredPrice,
            'offered_specs' => $dto->offeredSpecs,
            'status' => 'PENDING',
        ]);
    }
}
