<?php

namespace App\Modules\Identity\Application\DTOs\Auth;

class LoginDTO
{
    public function __construct(
        public readonly string $email,
        public readonly string $password,
        public readonly ?string $deviceName = 'mobile_app',
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            email: $data['email'],
            password: $data['password'],
            deviceName: $data['device_name'] ?? 'mobile_app',
        );
    }
}
