<?php

namespace App\Modules\Identity\Application\DTOs\Auth;

class RegisterDTO
{
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly string $password,
        public readonly string $accountType = 'CUSTOMER',
        public readonly ?string $storeId = null,
        public readonly ?string $phone = null,
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            name: $data['name'],
            email: $data['email'],
            password: $data['password'],
            accountType: $data['account_type'] ?? 'CUSTOMER',
            storeId: $data['store_id'] ?? null,
            phone: $data['phone'] ?? null,
        );
    }
}
