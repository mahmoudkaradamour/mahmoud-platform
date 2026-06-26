<?php

namespace App\Modules\Catalog\Application\Actions;

use App\Modules\Catalog\Application\DTOs\CreateProductDTO;
use App\Modules\Catalog\Infrastructure\Models\Product;

class CreateProductAction
{
    public function execute(CreateProductDTO $dto): Product
    {
        return Product::create([
            'store_id' => $dto->storeId,
            'name' => $dto->name,
            'slug' => $dto->slug,
            'category_path' => $dto->categoryPath,
            'base_price' => $dto->basePrice,
            'currency' => $dto->currency,
            'attributes' => $dto->attributes,
            'media' => $dto->media,
            'metadata' => $dto->metadata,
            'status' => $dto->status,
        ]);
    }
}
