<?php

namespace App\Modules\Financial\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use App\Modules\Marketplace\Infrastructure\Models\Store;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Transaction extends Model
{
    use HasUuids;

    protected $table = 'financial_transactions';
    protected $fillable = [
        'user_id', 'store_id', 'amount', 'currency',
        'payment_method', 'reference_type', 'reference_id',
        'type', 'status', 'gateway_response'
    ];

    protected $casts = [
        'gateway_response' => 'array',
        'amount' => 'float',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function invoice(): HasOne
    {
        return $this->hasOne(Invoice::class, 'transaction_id');
    }
}
