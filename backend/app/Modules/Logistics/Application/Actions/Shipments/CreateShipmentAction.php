<?php

namespace App\Modules\Logistics\Application\Actions\Shipments;

use App\Modules\Logistics\Application\DTOs\Shipments\CreateShipmentDTO;
use App\Modules\Logistics\Infrastructure\Models\Shipment;
use Illuminate\Support\Str;

class CreateShipmentAction
{
    public function execute(CreateShipmentDTO $dto): Shipment
    {
        return Shipment::create([
            'order_id' => $dto->orderId,
            'customer_id' => $dto->customerId,
            'store_id' => $dto->storeId,
            'tracking_number' => 'TRK-' . strtoupper(Str::random(10)),
            'carrier_name' => $dto->carrierName,
            'status' => 'PENDING',
            'origin_address' => $dto->originAddress,
            'destination_address' => $dto->destinationAddress,
            'shipping_cost' => $dto->shippingCost,
        ]);
    }
}
