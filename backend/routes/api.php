<?php

use App\Modules\Identity\Presentation\Controllers\AuthController;
use App\Modules\Catalog\Presentation\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/me', function (Request $request) {
            return new \App\Modules\Identity\Presentation\Resources\UserResource($request->user());
        });
    });
});

Route::prefix('v1/catalog')->group(function () {
    Route::get('/products', [ProductController.class, 'index']);
    Route::get('/products/{id}', [ProductController.class, 'show']);
    Route::post('/products', [ProductController.class, 'store']);
});
