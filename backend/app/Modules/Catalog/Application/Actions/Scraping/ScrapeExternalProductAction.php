<?php

namespace App\Modules\Catalog\Application\Actions\Scraping;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Bus;
use App\Modules\Catalog\Infrastructure\Jobs\ProcessProductScrapeJob;

/**
 * Hardened Asynchronous Scraper.
 * Moves logic to background queues with Proxy Rotation stubs to avoid IP Bans.
 */
class ScrapeExternalProductAction
{
    public function execute(string $url, int $merchantId): string
    {
        // 1. Instant Response to UI (No more 500 timeouts)
        $jobId = uniqid('scrape_');

        // 2. Dispatch to dedicated queue with Rate Limiting
        Bus::dispatch(new ProcessProductScrapeJob($url, $merchantId, $jobId));

        return $jobId; // Frontend polls for this ID or waits for Push Notification
    }
}
