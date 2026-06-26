<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Migration to add Sovereign Targeting to Merchant Stores.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('marketplace_stores', function (Blueprint $table) {
            $table->jsonb('targeting')->nullable(); // Regional and demographic rules
        });
    }

    public function down(): void
    {
        Schema::table('marketplace_stores', function (Blueprint $table) {
            $table->dropColumn('targeting');
        });
    }
};
