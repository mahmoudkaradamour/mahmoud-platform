<?php

namespace App\Modules\Catalog\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Application\Actions\CreateProductAction;
use App\Modules\Catalog\Application\DTOs\CreateProductDTO;
use App\Modules\Catalog\Presentation\Resources\ProductResource;
use App\Modules\Catalog\Infrastructure\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        $products = Product::all();
        return response()->json([
            'success' => true,
            'data' => ProductResource::collection($products)
        ]);
    }

    public function store(Request $request, CreateProductAction $action): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'store_id' => 'required|string',
            'name' => 'required|array',
            'slug' => 'required|string',
            'category_path' => 'required|string',
            'base_price' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $dto = CreateProductDTO::fromRequest($request->all());
        $product = $action->execute($dto);

        return response()->json([
            'success' => true,
            'data' => new ProductResource($product),
            'message' => 'Product created successfully in MongoDB.'
        ], 201);
    }

    public function show(string $id): JsonResponse
    {
        $product = Product::findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => new ProductResource($product)
        ]);
    }
}
