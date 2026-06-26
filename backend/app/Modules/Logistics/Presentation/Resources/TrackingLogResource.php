<?php

namespace App\Modules\Logistics\Presentation\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TrackingLogResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'location' => $this->location,
            'description' => $this->description,
            'status' => $this->status_at_time,
            'occurred_at' => $this->occurred_at,
        ];
    }
}
