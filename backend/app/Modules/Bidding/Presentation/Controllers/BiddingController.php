<?php

namespace App\Modules\Bidding\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Bidding\Application\Actions\Requests\PostProductRequestAction;
use App\Modules\Bidding\Application\Actions\Quotes\SubmitQuoteAction;
use App\Modules\Bidding\Application\Actions\Quotes\AcceptQuoteAction;
use App\Modules\Bidding\Application\DTOs\Requests\PostRequestDTO;
use App\Modules\Bidding\Application\DTOs\Quotes\SubmitQuoteDTO;
use App\Modules\Bidding\Presentation\Resources\RequestResource;
use App\Modules\Bidding\Presentation\Resources\QuoteResource;
use App\Modules\Bidding\Infrastructure\Models\ProductRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BiddingController extends Controller
{
    public function index(): JsonResponse
    {
        $requests = ProductRequest::with('quotes')->where('status', 'OPEN')->latest()->get();
        return response()->json([
            'success' => true,
            'data' => RequestResource::collection($requests)
        ]);
    }

    public function store(Request $request, PostProductRequestAction $action): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'budget_limit' => 'nullable|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $dto = PostRequestDTO::fromRequest($request->all(), $request->user()->id);
        $productRequest = $action->execute($dto);

        return response()->json([
            'success' => true,
            'data' => new RequestResource($productRequest),
            'message' => 'Product request published successfully.'
        ], 201);
    }

    public function submitQuote(Request $request, SubmitQuoteAction $action): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'request_id' => 'required|exists:bidding_product_requests,id',
            'store_id' => 'required|string',
            'offered_price' => 'required|numeric',
            'offered_specs' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $dto = SubmitQuoteDTO::fromRequest($request->all(), $request->user()->id);
        $quote = $action->execute($dto);

        return response()->json([
            'success' => true,
            'data' => new QuoteResource($quote),
            'message' => 'Quote submitted successfully.'
        ], 201);
    }

    public function acceptQuote(string $quoteId, AcceptQuoteAction $action): JsonResponse
    {
        $quote = $action->execute($quoteId);

        return response()->json([
            'success' => true,
            'data' => new QuoteResource($quote),
            'message' => 'Quote accepted successfully.'
        ]);
    }
}
