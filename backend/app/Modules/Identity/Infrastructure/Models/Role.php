<?php

namespace App\Modules\Identity\Infrastructure\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    use HasUuids;

    protected $table = 'identity_roles';
    protected $fillable = ['name', 'slug'];

    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'identity_role_permissions', 'role_id', 'permission_id');
    }
}
