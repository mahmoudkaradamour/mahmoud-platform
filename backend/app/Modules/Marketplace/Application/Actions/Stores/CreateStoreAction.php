<?php

namespace App\Modules\Marketplace\Application\Actions\Stores;

use App\Modules\Marketplace\Application\DTOs\Stores\CreateStoreDTO;
use App\Modules\Marketplace\Infrastructure\Models\Store;

class CreateStoreAction
{
    public function execute(CreateStoreDTO $dto): Store
    {
        return Store::create([
            'owner_id' => $dto->ownerId,
            'name' => $dto->name,
            'slug' => $dto->slug,
            'branding_config' => $dto->brandingConfig,
            'type' => $dto->type,
            'status' => 'PENDING_REVIEW',
        ]);
    }
}
