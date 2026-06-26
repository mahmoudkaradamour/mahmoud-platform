<?php

namespace App\Modules\Discovery\Application\Actions;

use App\Modules\Catalog\Infrastructure\Models\Product;
use Illuminate\Support\Facades\Http;

/**
 * AI-Driven Recommendation Service - Microservice Edition.
 * Offloads heavy vector calculations to a dedicated AI Service (Python/Milvus).
 * Prevents "CPU Starvation" on the Main API Gateway.
 */
class GetRecommendationsAction
{
    private string $aiServiceUrl = 'https://ai-domain.sovereign.com/v1';

    public function execute(int $userId, int $limit = 10): array
    {
        try {
            // 1. Fetch User Vector/Profile from AI Microservice
            $response = Http::withHeaders(['X-Sovereign-Internal' => 'V1'])
                ->get("{$this $this->aiServiceUrl}/recommendations/{$userId}", ['limit' => $limit]);

            if ($response->successful()) {
                $productIds = $response->json('data.top_matches');
                return Product::whereIn('_id', $productIds)->get()->toArray();
            }
        } catch (\Exception $e) {
            // Fallback logic to native PHP popularity-based results
        }

        return Product::orderBy('metadata.sales_count', 'desc')->limit($limit)->get()->toArray();
    }
}
