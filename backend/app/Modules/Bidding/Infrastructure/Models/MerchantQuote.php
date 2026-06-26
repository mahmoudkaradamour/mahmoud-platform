<?php

namespace App\Modules\Bidding\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MerchantQuote extends Model
{
    use HasUuids;

    protected $table = 'bidding_merchant_quotes';
    protected $fillable = ['request_id', 'merchant_user_id', 'store_id', 'offered_price', 'offered_specs', 'status'];

    public function request(): BelongsTo
    {
        return $this->belongsTo(ProductRequest::class, 'request_id');
    }

    public function merchant(): BelongsTo
    {
        return $this->belongsTo(User::class, 'merchant_user_id');
    }
}
