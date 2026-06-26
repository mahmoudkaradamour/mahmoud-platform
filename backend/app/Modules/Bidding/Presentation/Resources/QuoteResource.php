<?php

namespace App\Modules\Bidding\Presentation\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuoteResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'request_id' => $this->request_id,
            'store_id' => $this->store_id,
            'offered_price' => $this->offered_price,
            'offered_specs' => $this->offered_specs,
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }
}
