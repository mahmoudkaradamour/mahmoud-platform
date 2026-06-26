<?php

namespace App\Modules\Catalog\Application\DTOs;

class CreateProductDTO
{
    public function __construct(
        public readonly string $storeId,
        public readonly array $name, // Localized: ['ar' => '...', 'en' => '...']
        public readonly string $slug,
        public readonly string $categoryPath,
        public readonly float $basePrice,
        public readonly string $currency = 'USD',
        public readonly array $attributes = [],
        public readonly array $media = [],
        public readonly array $metadata = [],
        public readonly string $status = 'published'
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            storeId: $data['store_id'],
            name: $data['name'],
            slug: $data['slug'],
            categoryPath: $data['category_path'],
            basePrice: (float) $data['base_price'],
            currency: $data['currency'] ?? 'USD',
            attributes: $data['attributes'] ?? [],
            media: $data['media'] ?? [],
            metadata: $data['metadata'] ?? [],
            status: $data['status'] ?? 'published'
        );
    }
}
