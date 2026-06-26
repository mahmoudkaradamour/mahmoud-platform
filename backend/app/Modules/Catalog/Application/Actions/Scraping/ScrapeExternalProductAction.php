<?php

namespace App\Modules\Catalog\Application\Actions\Scraping;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * Enterprise Scraper Gateway (Proxy Pattern).
 * REDEMPTION: Removed internal DOM parsing.
 * Delegates to specialized scraping providers (BrightData/ScrapingBee)
 * to handle JS-rendering, Proxy Rotation, and Captchas.
 */
class ScrapeExternalProductAction
{
    private string $providerUrl = 'https://api.scraping-provider.com/v1';
    private string $apiKey;

    public function __construct() {
        $this->apiKey = config('services.scraper.key');
    }

    public function execute(string $targetUrl): array
    {
        try {
            // 1. Offload the "Dirty Work" to professional infrastructure
            $response = Http::get($this->providerUrl, [
                'api_key' => $this->apiKey,
                'url' => $targetUrl,
                'render_js' => true,
                'premium_proxy' => true
            ]);

            if ($response->successful()) {
                return $response->json('data'); // Standardized JSON result from provider
            }
        } catch (\Exception $e) {
            Log::error("Scraping Delegation Failed", ['url' => $targetUrl, 'error' => $e->getMessage()]);
        }

        return ['success' => false, 'message' => 'Scraping infrastructure unreachable.'];
    }
}
