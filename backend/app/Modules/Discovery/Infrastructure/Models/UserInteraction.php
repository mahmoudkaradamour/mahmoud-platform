<?php

namespace App\Modules\Discovery\Infrastructure\Models;

use MongoDB\Laravel\Eloquent\Model;

/**
 * User Interaction Model - Behavioral Tracking.
 * Stores granular events (view, click, cart, purchase) for AI analysis.
 */
class UserInteraction extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_interactions';

    protected $fillable = [
        'user_id',
        'product_id',
        'event_type', // view, add_to_cart, purchase
        'metadata', // {category_id, brand, price}
        'weight', // calculated score for the interaction
    ];

    protected $casts = [
        'metadata' => 'array',
        'weight' => 'integer',
    ];
}
