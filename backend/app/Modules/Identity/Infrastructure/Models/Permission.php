<?php

namespace App\Modules\Identity\Infrastructure\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Permission extends Model
{
    use HasUuids;

    protected $table = 'identity_permissions';
    protected $fillable = ['name', 'slug', 'module'];

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'identity_role_permissions', 'permission_id', 'role_id');
    }
}
