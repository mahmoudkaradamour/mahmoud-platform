<?php

namespace App\Modules\Bidding\Presentation\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RequestResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'customer_id' => $this->customer_id,
            'title' => $this->title,
            'description' => $this->description,
            'budget_limit' => $this->budget_limit,
            'currency' => $this->currency,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'quotes_count' => $this->quotes()->count(),
        ];
    }
}
