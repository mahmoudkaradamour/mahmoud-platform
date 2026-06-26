<?php

namespace App\Modules\Identity\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Identity\Application\Actions\Auth\LoginUserAction;
use App\Modules\Identity\Application\Actions\Auth\RegisterUserAction;
use App\Modules\Identity\Application\DTOs\Auth\LoginDTO;
use App\Modules\Identity\Application\DTOs\Auth\RegisterDTO;
use App\Modules\Identity\Presentation\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request, RegisterUserAction $action): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'account_type' => 'in:ADMIN,SELLER,STAFF,CUSTOMER',
            'phone' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $dto = RegisterDTO::fromRequest($request->all());
        $user = $action->execute($dto);

        return response()->json([
            'success' => true,
            'data' => new UserResource($user),
            'message' => 'User registered successfully.'
        ], 201);
    }

    public function login(Request $request, LoginUserAction $action): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'device_name' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->errors()], 422);
        }

        $dto = LoginDTO::fromRequest($request->all());
        $result = $action->execute($dto);

        return response()->json([
            'success' => true,
            'data' => [
                'user' => new UserResource($result['user']),
                'token' => $result['token'],
            ],
            'message' => 'Login successful.'
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully.'
        ]);
    }
}
