<?php

namespace App\Modules\Logistics\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use App\Modules\Marketplace\Infrastructure\Models\Store;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Shipment extends Model
{
    use HasUuids;

    protected $table = 'logistics_shipments';
    protected $fillable = [
        'order_id', 'customer_id', 'store_id', 'tracking_number',
        'carrier_name', 'status', 'origin_address',
        'destination_address', 'shipping_cost', 'estimated_delivery_at'
    ];

    protected $casts = [
        'origin_address' => 'array',
        'destination_address' => 'array',
        'estimated_delivery_at' => 'datetime',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class, 'store_id');
    }

    public function logs(): HasMany
    {
        return $this->hasMany(TrackingLog::class, 'shipment_id');
    }
}
