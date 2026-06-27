<?php

namespace App\Modules\Catalog\Application\Actions\Search;

use App\Modules\Catalog\Infrastructure\Models\Product;
use Illuminate\Http\Request;

/**
 * Enterprise Faceted Search Engine.
 * Supports complex filtering by Brand, Price, Attributes, and Targeting rules.
 */
class FacetedSearchAction
{
    public function execute(Request $request): array
    {
        $query = Product::where('status', 'ACTIVE');

        // 1. Dynamic Attribute Filtering
        if ($request->has('brand')) {
            $query->where('metadata.brand', $request->brand);
        }
        if ($request->has('color')) {
            $query->where('attributes.color', $request->color);
        }

        // 2. Price Range Brackets
        if ($request->has('min_price')) {
            $query->where('base_price', '>=', (float)$request->min_price);
        }
        if ($request->has('max_price')) {
            $query->where('base_price', '<=', (float)$request->max_price);
        }

        // 3. Sovereign Targeting (Region/Age)
        if ($request->header('X-User-Region')) {
            $query->where(function($q) use ($request) {
                $q->whereNull('targeting.regions')
                  ->orWhereIn('targeting.regions', [$request->header('X-User-Region')]);
            });
        }

        return $query->paginate(20)->toArray();
    }
}
