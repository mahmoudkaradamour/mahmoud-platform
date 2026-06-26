<?php

namespace App\Modules\Bidding\Domain\Events;

use App\Modules\Bidding\Infrastructure\Models\MerchantQuote;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * Domain Event: QuoteAccepted
 * Fired when a consumer accepts a merchant's bid.
 * This event serves as the primary decoupling point between Bidding and Logistics.
 */
class QuoteAccepted
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public readonly MerchantQuote $quote
    ) {}
}
