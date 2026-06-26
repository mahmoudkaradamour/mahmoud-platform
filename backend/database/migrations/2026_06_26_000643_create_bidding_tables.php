<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Product Requests Table (Consumer Side)
        Schema::create('bidding_product_requests', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('customer_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->decimal('budget_limit', 15, 2)->nullable();
            $table->string('currency')->default('USD');
            $table->enum('status', ['OPEN', 'ACCEPTED', 'CLOSED', 'EXPIRED'])->default('OPEN');
            $table->timestamps();
        });

        // 2. Merchant Quotes Table (Seller Side)
        Schema::create('bidding_merchant_quotes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('request_id')->constrained('bidding_product_requests')->onDelete('cascade');
            $table->foreignId('merchant_user_id')->constrained('users')->onDelete('cascade');
            $table->uuid('store_id')->index(); // Link to the merchant's store
            $table->decimal('offered_price', 15, 2);
            $table->text('offered_specs');
            $table->enum('status', ['PENDING', 'ACCEPTED', 'REJECTED'])->default('PENDING');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bidding_merchant_quotes');
        Schema::dropIfExists('bidding_product_requests');
    }
};
