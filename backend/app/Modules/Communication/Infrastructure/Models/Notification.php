<?php

namespace App\Modules\Communication\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Eloquent Model for Platform Notifications.
 * Handles system alerts, order updates, and marketing triggers.
 */
class Notification extends Model
{
    use HasUuids;

    protected $table = 'communication_notifications';
    protected $fillable = ['user_id', 'type', 'title', 'content', 'data', 'read_at'];

    protected $casts = [
        'data' => 'array',
        'read_at' => 'datetime',
    ];

    /**
     * Relationship to the targeted user.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
