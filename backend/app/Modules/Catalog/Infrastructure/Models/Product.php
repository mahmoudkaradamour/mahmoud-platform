<?php

namespace App\Modules\Catalog\Infrastructure\Models;

use MongoDB\Laravel\Eloquent\Model;

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
        'status'
    ];

    protected $casts = [
        'attributes' => 'array',
        'media' => 'array',
        'metadata' => 'array',
        'base_price' => 'float'
    ];
}
