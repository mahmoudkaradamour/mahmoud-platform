<?php

namespace App\Modules\Logistics\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Logistics\Infrastructure\Models\Shipment;
use App\Modules\Logistics\Presentation\Resources\ShipmentResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LogisticsController extends Controller
{
    public function track(string $trackingNumber): JsonResponse
    {
        $shipment = Shipment::with('logs')
            ->where('tracking_number', $trackingNumber)
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => new ShipmentResource($shipment)
        ]);
    }

    public function myShipments(Request $request): JsonResponse
    {
        $shipments = Shipment::where('customer_id', $request->user()->id)
            ->latest()
            ->paginate(15);

        return response()->json([
            'success' => true,
            'data' => ShipmentResource::collection($shipments)
        ]);
    }
}
