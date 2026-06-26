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
        // 1. Shipments Table
        Schema::create('logistics_shipments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('order_id')->nullable()->index(); // Can link to an order or a bidding request
            $table->foreignId('customer_id')->constrained('users');
            $table->foreignUuid('store_id')->constrained('marketplace_stores');
            $table->string('tracking_number')->unique();
            $table->string('carrier_name')->default('INTERNAL');
            $table->enum('status', ['PENDING', 'PICKED_UP', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'RETURNED', 'FAILED'])->default('PENDING');
            $table->jsonb('origin_address');
            $table->jsonb('destination_address');
            $table->decimal('shipping_cost', 15, 2)->default(0);
            $table->timestamp('estimated_delivery_at')->nullable();
            $table->timestamps();
        });

        // 2. Tracking Logs (Audit Trail)
        Schema::create('logistics_tracking_logs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('shipment_id')->constrained('logistics_shipments')->onDelete('cascade');
            $table->string('location');
            $table->string('description');
            $table->string('status_at_time');
            $table->timestamp('occurred_at');
            $table->jsonb('metadata')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logistics_tracking_logs');
        Schema::dropIfExists('logistics_shipments');
    }
};
