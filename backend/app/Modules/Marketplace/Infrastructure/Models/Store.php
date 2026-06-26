<?php

namespace App\Modules\Marketplace\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Store extends Model
{
    use HasUuids;

    protected $table = 'marketplace_stores';
    protected $fillable = ['owner_id', 'name', 'slug', 'branding_config', 'status', 'type'];

    protected $casts = [
        'branding_config' => 'array',
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function staff(): HasMany
    {
        return $this->hasMany(StoreStaff::class, 'store_id');
    }
}
