<?php

namespace App\Modules\Identity\Application\Actions\Auth;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Support\Facades\Hash;

/**
 * Sovereign Account Lifecycle Manager.
 * Handles sensitive actions: Suspension, Deletion, and MFA Configuration.
 */
class HandleAccountLifecycle
{
    public function suspendAccount(int $userId, string $reason): void
    {
        $user = User::findOrFail($userId);
        $user->update([
            'status' => 'SUSPENDED',
            'metadata' => array_merge($user->metadata ?? [], ['suspension_reason' => $reason])
        ]);
    }

    public function deleteAccount(int $userId): void
    {
        $user = User::findOrFail($userId);
        // Forensic deletion: mark as deleted but keep logs for legal compliance
        $user->update(['status' => 'DELETED', 'email' => 'deleted_' . time() . '@sovereign.com']);
    }

    public function toggleTwoFactor(int $userId, bool $enabled, string $type = 'email'): void
    {
        $user = User::findOrFail($userId);
        $user->update([
            'two_factor_enabled' => $enabled,
            'two_factor_type' => $type // 'email' or 'totp'
        ]);
    }

    public function resetPassword(string $email, string $newPassword): bool
    {
        $user = User::where('email', $email)->first();
        if (!$user) return false;

        $user->update(['password' => Hash::make($newPassword)]);
        return true;
    }
}
