<?php

namespace App\Modules\Catalog\Presentation\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->_id, // MongoDB ID
            'store_id' => $this->store_id,
            'name' => $this->name,
            'slug' => $this->slug,
            'category_path' => $this->category_path,
            'base_price' => $this->base_price,
            'currency' => $this->currency,
            'attributes' => $this->attributes,
            'media' => $this->media,
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }
}
