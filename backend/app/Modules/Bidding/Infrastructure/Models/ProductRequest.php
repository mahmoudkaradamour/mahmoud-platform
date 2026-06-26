<?php

namespace App\Modules\Bidding\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductRequest extends Model
{
    use HasUuids;

    protected $table = 'bidding_product_requests';
    protected $fillable = ['customer_id', 'title', 'description', 'budget_limit', 'currency', 'status'];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function quotes(): HasMany
    {
        return $this->hasMany(MerchantQuote::class, 'request_id');
    }
}
