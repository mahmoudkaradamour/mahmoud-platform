<?php

namespace App\Modules\Catalog\Infrastructure\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Enterprise Inventory Matrix Model.
 * Manages complex variations (Color, Size, Memory) and stock levels per Merchant Store.
 */
class InventoryMatrix extends Model
{
    protected $fillable = [
        'store_id',
        'product_id',
        'variant_id', // Links to the specific variation from Scraper
        'attributes', // JSON: {"color": "Blue", "memory": "256GB"}
        'quantity',
        'price_adjustment', // Price delta relative to base price
        'status'
    ];

    protected $casts = [
        'attributes' => 'array',
        'price_adjustment' => 'float'
    ];
}
