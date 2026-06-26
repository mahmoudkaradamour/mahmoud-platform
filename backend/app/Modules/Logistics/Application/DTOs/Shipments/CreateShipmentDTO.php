<?php

namespace App\Modules\Logistics\Application\DTOs\Shipments;

class CreateShipmentDTO
{
    public function __construct(
        public readonly ?string $orderId,
        public readonly int $customerId,
        public readonly string $storeId,
        public readonly array $originAddress,
        public readonly array $destinationAddress,
        public readonly float $shippingCost = 0,
        public readonly ?string $carrierName = 'INTERNAL'
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            orderId: $data['order_id'] ?? null,
            customerId: (int) $data['customer_id'],
            storeId: $data['store_id'],
            originAddress: $data['origin_address'],
            destinationAddress: $data['destination_address'],
            shippingCost: (float) ($data['shipping_cost'] ?? 0),
            carrierName: $data['carrier_name'] ?? 'INTERNAL'
        );
    }
}
