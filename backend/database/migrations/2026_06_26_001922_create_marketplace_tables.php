<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Hardens the database with PostgreSQL Row-Level Security (RLS) policies.
     */
    public function up(): void
    {
        // 1. Merchant Stores Table
        Schema::create('marketplace_stores', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('owner_id')->constrained('users')->onDelete('cascade');
            $table->string('name');
            $table->string('slug')->unique();
            $table->jsonb('branding_config')->nullable();
            $table->enum('status', ['ACTIVE', 'SUSPENDED', 'PENDING_REVIEW'])->default('PENDING_REVIEW');
            $table->enum('type', ['RETAIL', 'WHOLESALE'])->default('RETAIL');
            $table->timestamps();
        });

        /**
         * Enterprise Security: Enable Row-Level Security.
         * Ensures that even if the app layer is compromised, a database user can only
         * access stores belonging to their own 'owner_id'.
         */
        DB::statement('ALTER TABLE marketplace_stores ENABLE ROW LEVEL SECURITY;');
        DB::statement("
            CREATE POLICY store_isolation_policy ON marketplace_stores
            FOR ALL
            TO PUBLIC
            USING (owner_id = current_setting('app.current_user_id')::integer);
        ");

        // 2. Store Staff Table
        Schema::create('marketplace_store_staff', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('store_id')->constrained('marketplace_stores')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->jsonb('permissions')->nullable();
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
        DB::statement('DROP POLICY IF EXISTS store_isolation_policy ON marketplace_stores;');
        Schema::dropIfExists('marketplace_store_staff');
        Schema::dropIfExists('marketplace_stores');
    }
};
