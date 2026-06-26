<?php

namespace App\Modules\Catalog\Infrastructure\Models;

use MongoDB\Laravel\Eloquent\Model;

/**
 * Enhanced Product Model with Global Targeting Support.
 */
class Product extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'products';

    protected $fillable = [
        'store_id',
        'name',
        'slug',
        'category_path',
        'base_price',
        'currency',
        'attributes',
        'media',
        'metadata',
        'status',
        'targeting' // New field: ['regions' => [], 'min_age' => 0]
    ];

    protected $casts = [
        'attributes' => 'array',
        'media' => 'array',
        'metadata' => 'array',
        'targeting' => 'array',
        'base_price' => 'float'
    ];
}
