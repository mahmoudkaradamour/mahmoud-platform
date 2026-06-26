<?php

namespace App\Modules\Platform\Infrastructure\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Global Platform Setting Model.
 */
class Setting extends Model
{
    protected $table = 'platform_settings';
    protected $fillable = ['key', 'value', 'group'];

    protected $casts = [
        'value' => 'array',
    ];
}
