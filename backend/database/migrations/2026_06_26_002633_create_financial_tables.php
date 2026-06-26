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
        // 1. Transactions Ledger
        Schema::create('financial_transactions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('user_id')->constrained('users');
            $table->uuid('store_id')->nullable()->index();
            $table->decimal('amount', 15, 2);
            $table->string('currency')->default('USD');
            $table->string('payment_method'); // e.g., 'WALLET', 'CASH', 'GATEWAY'
            $table->string('reference_type')->index(); // e.g., 'ORDER', 'BID'
            $table->uuid('reference_id')->index();
            $table->enum('type', ['DEBIT', 'CREDIT']);
            $table->enum('status', ['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'])->default('PENDING');
            $table->jsonb('gateway_response')->nullable();
            $table->timestamps();
        });

        // 2. Invoices Table
        Schema::create('financial_invoices', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('transaction_id')->constrained('financial_transactions');
            $table->string('invoice_number')->unique();
            $table->jsonb('billing_details');
            $table->jsonb('line_items');
            $table->decimal('subtotal', 15, 2);
            $table->decimal('tax_amount', 15, 2)->default(0);
            $table->decimal('total', 15, 2);
            $table->timestamp('issued_at');
            $table->timestamp('due_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('financial_invoices');
        Schema::dropIfExists('financial_transactions');
    }
};
