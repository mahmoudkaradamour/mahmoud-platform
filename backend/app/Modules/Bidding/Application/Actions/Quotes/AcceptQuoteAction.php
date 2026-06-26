<?php

namespace App\Modules\Bidding\Application\Actions\Quotes;

use App\Modules\Bidding\Domain\Events\QuoteAccepted;
use App\Modules\Bidding\Domain\Repositories\QuoteRepositoryInterface;
use App\Modules\Bidding\Infrastructure\Models\MerchantQuote;
use Illuminate\Support\Facades\DB;

/**
 * Application Action: Accept a Merchant Quote.
 * Orchestrates the domain logic for accepting a bid and notifying the system via events.
 */
class AcceptQuoteAction
{
    public function __construct(
        private readonly QuoteRepositoryInterface $repository
    ) {}

    public function execute(string $quoteId): MerchantQuote
    {
        return DB::transaction(function () use ($quoteId) {
            $quote = $this->repository->findById($quoteId);
            if (!$quote) {
                throw new \Exception("Quote not found.");
            }

            $request = $quote->request;

            // 1. Domain Logic: Mark quote and request as accepted
            $quote->status = 'ACCEPTED';
            $this->repository->save($quote);

            $request->status = 'ACCEPTED';
            $request->save();

            // 2. Domain Logic: Reject competing bids
            $this->repository->rejectOthersForRequest($request->id, $quoteId);

            // 3. Decoupling: Dispatch Domain Event for other modules (e.g., Logistics)
            event(new QuoteAccepted($quote));

            return $quote;
        });
    }
}
