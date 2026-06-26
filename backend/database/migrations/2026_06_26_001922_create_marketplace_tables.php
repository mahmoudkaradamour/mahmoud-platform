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
        // 1. Merchant Stores Table
        Schema::create('marketplace_stores', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('owner_id')->constrained('users')->onDelete('cascade');
            $table->string('name');
            $table->string('slug')->unique();
            $table->jsonb('branding_config')->nullable(); // Colors, Fonts, Logo
            $table->enum('status', ['ACTIVE', 'SUSPENDED', 'PENDING_REVIEW'])->default('PENDING_REVIEW');
            $table->enum('type', ['RETAIL', 'WHOLESALE'])->default('RETAIL');
            $table->timestamps();
        });

        // 2. Store Staff Table (RBAC for Merchants)
        Schema::create('marketplace_store_staff', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('store_id')->constrained('marketplace_stores')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->jsonb('permissions')->nullable(); // Specific granular permissions
            $table->string('job_title')->nullable();
            $table->timestamps();

            $table->unique(['store_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marketplace_store_staff');
        Schema::dropIfExists('marketplace_stores');
    }
};
