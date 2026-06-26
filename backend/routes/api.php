<?php

use App\Modules\Identity\Presentation\Controllers\AuthController;
use App\Modules\Catalog\Presentation\Controllers\ProductController;
use App\Modules\Bidding\Presentation\Controllers\BiddingController;
use App\Modules\Marketplace\Presentation\Controllers\MerchantController;
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

Route::prefix('v1/bidding')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/requests', [BiddingController.class, 'index']);
        Route::post('/requests', [BiddingController.class, 'store']);
        Route::post('/quotes', [BiddingController.class, 'submitQuote']);
        Route::post('/quotes/{id}/accept', [BiddingController.class, 'acceptQuote']);
    });
});

Route::prefix('v1/merchant')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/my-stores', [MerchantController::class, 'myStores']);
        Route::post('/stores', [MerchantController.class, 'createStore']);
    });
});
