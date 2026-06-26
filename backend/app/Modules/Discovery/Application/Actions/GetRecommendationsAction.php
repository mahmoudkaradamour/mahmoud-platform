<?php

namespace App\Modules\Discovery\Application\Actions;

use App\Modules\Discovery\Infrastructure\Models\UserInteraction;
use App\Modules\Catalog\Infrastructure\Models\Product;

/**
 * AI-Driven Recommendation Service.
 * Implements a hybrid filtering strategy to surface personalized products.
 */
class GetRecommendationsAction
{
    public function execute(int $userId, int $limit = 10): array
    {
        // 1. Fetch User Profile (Last interacted categories/brands)
        $interactions = UserInteraction::where('user_id', $userId)
            ->orderBy('created_at', 'desc')
            ->limit(50)
            ->get();

        if ($interactions->isEmpty()) {
            // Cold Start: Return top trending products
            return Product::orderBy('metadata.sales_count', 'desc')->limit($limit)->get()->toArray();
        }

        $favCategories = $interactions->pluck('metadata.category_path')->unique()->toArray();
        $favBrands = $interactions->pluck('metadata.brand')->unique()->toArray();

        // 2. Query Hybrid Logic: Similarity + Popularity
        return Product::whereIn('category_path', $favCategories)
            ->orWhereIn('metadata.brand', $favBrands)
            ->where('status', 'ACTIVE')
            ->orderBy('metadata.sales_count', 'desc')
            ->limit($limit)
            ->get()
            ->toArray();
    }
}
