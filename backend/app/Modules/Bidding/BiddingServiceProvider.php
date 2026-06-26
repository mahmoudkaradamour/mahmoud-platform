<?php

namespace App\Modules\Bidding;

use App\Modules\Bidding\Domain\Repositories\QuoteRepositoryInterface;
use App\Modules\Bidding\Infrastructure\Persistence\EloquentQuoteRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Enterprise Service Provider for the Bidding Module.
 * Binds Domain Abstractions to Infrastructure Implementations.
 */
class BiddingServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            QuoteRepositoryInterface::class,
            EloquentQuoteRepository::class
        );
    }

    public function boot(): void
    {
        //
    }
}
