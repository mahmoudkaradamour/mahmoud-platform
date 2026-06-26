<?php

namespace App\Modules\Communication\Infrastructure\Models;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Model representing a Chat Conversation.
 * Can be linked to a specific Bidding Request or Customer Support ticket.
 */
class Conversation extends Model
{
    use HasUuids;

    protected $table = 'communication_conversations';
    protected $fillable = ['reference_type', 'reference_id'];

    /**
     * Users participating in this conversation.
     */
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'communication_conversation_participants', 'conversation_id', 'user_id');
    }

    /**
     * Historical messages within this chat context.
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class, 'conversation_id');
    }
}
