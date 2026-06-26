<?php

namespace App\Modules\Financial\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Financial\Application\Actions\Payments\ProcessPaymentAction;
use App\Modules\Financial\Application\DTOs\Payments\ProcessPaymentDTO;
use App\Modules\Financial\Infrastructure\Models\Transaction;
use App\Modules\Financial\Presentation\Resources\TransactionResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FinancialController extends Controller
{
    public function history(Request $request): JsonResponse
    {
        $transactions = Transaction::where('user_id', $request->user()->id)
            ->latest()
            ->paginate(15);

        return response()->json([
            'success' => true,
            'data' => TransactionResource::collection($transactions)
        ]);
    }

    public function pay(Request $request, ProcessPaymentAction $action): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'amount' => 'required|numeric|min:0.01',
            'payment_method' => 'required|string',
            'reference_type' => 'required|string',
            'reference_id' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $dto = ProcessPaymentDTO::fromRequest($request->all(), $request->user()->id);
        $transaction = $action->execute($dto);

        return response()->json([
            'success' => true,
            'data' => new TransactionResource($transaction),
            'message' => 'Payment processed successfully.'
        ]);
    }
}
