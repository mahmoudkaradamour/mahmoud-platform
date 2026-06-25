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
        // 1. Permissions Table
        Schema::create('identity_permissions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->string('module'); // e.g., 'catalog', 'orders'
            $table->timestamps();
        });

        // 2. Roles Table
        Schema::create('identity_roles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->timestamps();
        });

        // 3. Role-Permission Pivot
        Schema::create('identity_role_permissions', function (Blueprint $table) {
            $table->foreignUuid('role_id')->constrained('identity_roles')->onDelete('cascade');
            $table->foreignUuid('permission_id')->constrained('identity_permissions')->onDelete('cascade');
            $table->primary(['role_id', 'permission_id']);
        });

        // 4. Update Users Table to support Multi-tenancy and RBAC
        Schema::table('users', function (Blueprint $table) {
            $table->uuid('store_id')->nullable()->index(); // For multi-tenancy
            $table->enum('account_type', ['ADMIN', 'SELLER', 'STAFF', 'CUSTOMER'])->default('CUSTOMER');
            $table->string('phone_encrypted')->nullable()->unique();
            $table->jsonb('security_claims')->nullable(); // For forensic audit / MFA
        });

        // 5. User-Role Pivot
        Schema::create('identity_user_roles', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignUuid('role_id')->constrained('identity_roles')->onDelete('cascade');
            $table->primary(['user_id', 'role_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('identity_user_roles');
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['store_id', 'account_type', 'phone_encrypted', 'security_claims']);
        });
        Schema::dropIfExists('identity_role_permissions');
        Schema::dropIfExists('identity_roles');
        Schema::dropIfExists('identity_permissions');
    }
};
