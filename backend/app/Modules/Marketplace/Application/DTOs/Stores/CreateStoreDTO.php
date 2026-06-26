<?php

namespace App\Modules\Marketplace\Application\DTOs\Stores;

class CreateStoreDTO
{
    public function __construct(
        public readonly int $ownerId,
        public readonly string $name,
        public readonly string $slug,
        public readonly array $brandingConfig = [],
        public readonly string $type = 'RETAIL'
    ) {}

    public static function fromRequest(array $data, int $ownerId): self
    {
        return new self(
            ownerId: $ownerId,
            name: $data['name'],
            slug: $data['slug'],
            brandingConfig: $data['branding_config'] ?? [],
            type: $data['type'] ?? 'RETAIL'
        );
    }
}
