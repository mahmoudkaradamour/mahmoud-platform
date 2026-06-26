<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Enterprise API Routes - Version 1 (String Referenced for Stability)
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {

    // Identity & Access Management
    Route::prefix('auth')->group(function () {
        Route::post('/register', 'App\Modules\Identity\Presentation\Controllers\AuthController@register');
        Route::post('/login', 'App\Modules\Identity\Presentation\Controllers\AuthController@login');
        Route::middleware('auth:sanctum')->post('/logout', 'App\Modules\Identity\Presentation\Controllers\AuthController@logout');
    });

    // Product Discovery & Management
    Route::prefix('catalog')->group(function () {
        Route::get('/products', 'App\Modules\Catalog\Presentation\Controllers\ProductController@index');
        Route::get('/products/{id}', 'App\Modules\Catalog\Presentation\Controllers\ProductController@show');
        Route::middleware('auth:sanctum')->post('/products', 'App\Modules\Catalog\Presentation\Controllers\ProductController@store');
    });

    // Reverse Bidding & Product Requests
    Route::prefix('bidding')->middleware('auth:sanctum')->group(function () {
        Route::get('/requests', 'App\Modules\Bidding\Presentation\Controllers\BiddingController@index');
        Route::post('/requests', 'App\Modules\Bidding\Presentation\Controllers\BiddingController@store');
        Route::post('/quotes', 'App\Modules\Bidding\Presentation\Controllers\BiddingController@submitQuote');
        Route::post('/quotes/{id}/accept', 'App\Modules\Bidding\Presentation\Controllers\BiddingController@acceptQuote');
    });

    // Marketplace & Merchant Operations
    Route::prefix('merchant')->middleware('auth:sanctum')->group(function () {
        Route::get('/my-stores', 'App\Modules\Marketplace\Presentation\Controllers\MerchantController@myStores');
        Route::post('/stores', 'App\Modules\Marketplace\Presentation\Controllers\MerchantController@createStore');
    });

    // Logistics & Real-time Tracking
    Route::prefix('logistics')->group(function () {
        Route::get('/track/{number}', 'App\Modules\Logistics\Presentation\Controllers\LogisticsController@track');
        Route::middleware('auth:sanctum')->get('/my-shipments', 'App\Modules\Logistics\Presentation\Controllers\LogisticsController@myShipments');
    });

    // Financial Ledger & Payments
    Route::prefix('financial')->middleware('auth:sanctum')->group(function () {
        Route::get('/transactions', 'App\Modules\Financial\Presentation\Controllers\FinancialController@history');
        Route::post('/pay', 'App\Modules\Financial\Presentation\Controllers\FinancialController@pay');
    });

    // Unified Communication System
    Route::prefix('communication')->middleware('auth:sanctum')->group(function () {
        Route::get('/notifications', 'App\Modules\Communication\Presentation\Controllers\NotificationController@index');
        Route::patch('/notifications/{id}/read', 'App\Modules\Communication\Presentation\Controllers\NotificationController@markAsRead');
    });

});
