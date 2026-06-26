<?php

namespace App\Modules\Communication\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Individual Chat Message Model.
 * Supports rich text and media attachments.
 */
class Message extends Model
{
    use HasUuids;

    protected $table = 'communication_messages';
    protected $fillable = ['conversation_id', 'sender_id', 'message_body', 'attachments'];

    protected $casts = [
        'attachments' => 'array',
    ];

    /**
     * Parent conversation reference.
     */
    public function conversation(): BelongsTo
    {
        return $this->belongsTo(Conversation::class);
    }

    /**
     * User who sent the message.
     */
    public function sender(): BelongsTo
    {
        return $this->belongsTo(User::class, 'sender_id');
    }
}
