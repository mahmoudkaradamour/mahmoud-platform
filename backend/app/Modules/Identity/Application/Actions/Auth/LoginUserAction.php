<?php

namespace App\Modules\Identity\Application\Actions\Auth;

use App\Modules\Identity\Application\DTOs\Auth\LoginDTO;
use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginUserAction
{
    public function execute(LoginDTO $dto): array
    {
        $user = User::where('email', $dto->email)->first();

        if (!$user || !Hash::check($dto->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials.'],
            ]);
        }

        $token = $user->createToken($dto->deviceName)->plainTextToken;

        return [
            'user' => $user,
            'token' => $token,
        ];
    }
}
