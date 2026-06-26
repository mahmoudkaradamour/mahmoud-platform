<?php

namespace App\Modules\Bidding\Application\Actions\Requests;

use App\Modules\Bidding\Application\DTOs\Requests\PostRequestDTO;
use App\Modules\Bidding\Infrastructure\Models\ProductRequest;

class PostProductRequestAction
{
    public function execute(PostRequestDTO $dto): ProductRequest
    {
        return ProductRequest::create([
            'customer_id' => $dto->customerId,
            'title' => $dto->title,
            'description' => $dto->description,
            'budget_limit' => $dto->budgetLimit,
            'currency' => $dto->currency,
            'status' => 'OPEN',
        ]);
    }
}
