<?php

namespace App\Modules\Marketplace\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Marketplace\Application\Actions\Stores\CreateStoreAction;
use App\Modules\Marketplace\Application\DTOs\Stores\CreateStoreDTO;
use App\Modules\Marketplace\Presentation\Resources\StoreResource;
use App\Modules\Marketplace\Infrastructure\Models\Store;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MerchantController extends Controller
{
    public function myStores(Request $request): JsonResponse
    {
        $stores = Store::where('owner_id', $request->user()->id)->get();
        return response()->json([
            'success' => true,
            'data' => StoreResource::collection($stores)
        ]);
    }

    public function createStore(Request $request, CreateStoreAction $action): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:marketplace_stores,slug',
            'type' => 'in:RETAIL,WHOLESALE',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $dto = CreateStoreDTO::fromRequest($request->all(), $request->user()->id);
        $store = $action->execute($dto);

        return response()->json([
            'success' => true,
            'data' => new StoreResource($store),
            'message' => 'Store created successfully and is pending review.'
        ], 201);
    }
}
