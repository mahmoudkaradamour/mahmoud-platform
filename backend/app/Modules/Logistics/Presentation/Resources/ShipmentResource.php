<?php

namespace App\Modules\Logistics\Presentation\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShipmentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'tracking_number' => $this->tracking_number,
            'carrier' => $this->carrier_name,
            'status' => $this->status,
            'origin' => $this->origin_address,
            'destination' => $this->destination_address,
            'estimated_delivery' => $this->estimated_delivery_at,
            'logs' => TrackingLogResource::collection($this->whenLoaded('logs')),
        ];
    }
}
