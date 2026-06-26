<?php

namespace App\Modules\Identity\Application\Actions\Auth;

use App\Modules\Identity\Application\DTOs\Auth\RegisterDTO;
use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterUserAction
{
    public function execute(RegisterDTO $dto): User
    {
        return User::create([
            'name' => $dto->name,
            'email' => $dto->email,
            'password' => Hash::make($dto->password),
            'account_type' => $dto->accountType,
            'store_id' => $dto->storeId,
            'phone_encrypted' => $dto->phone, // In production, wrap with ALE service
        ]);
    }
}
