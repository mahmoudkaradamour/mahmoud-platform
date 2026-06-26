<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Migration class for the Communication Module.
 * This class handles the creation of real-time messaging and notification tables
 * following high-integrity relational standards in PostgreSQL.
 */
return new class extends Migration
{
    /**
     * Run the migrations.
     * This creates the core tables for user interactions and platform-wide alerts.
     */
    public function up(): void
    {
        // 1. Notifications Table (System & Marketing Alerts)
        Schema::create('communication_notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('type'); // e.g., 'SYSTEM_ALERT', 'PROMO', 'ORDER_UPDATE'
            $table->string('title');
            $table->text('content');
            $table->jsonb('data')->nullable(); // Contextual payload for app routing
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });

        // 2. Chat Conversations Table (Bidding & Support)
        Schema::create('communication_conversations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('reference_type')->nullable(); // e.g., 'BID_REQUEST'
            $table->uuid('reference_id')->nullable();
            $table->timestamps();
        });

        // 3. Messages Table (Real-time Message Storage)
        Schema::create('communication_messages', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('conversation_id')->constrained('communication_conversations')->onDelete('cascade');
            $table->foreignId('sender_id')->constrained('users');
            $table->text('message_body');
            $table->jsonb('attachments')->nullable(); // Images, Voice, etc
            $table->timestamps();
        });

        // 4. Conversation Participants (Many-to-Many)
        Schema::create('communication_conversation_participants', function (Blueprint $table) {
            $table->foreignUuid('conversation_id')->constrained('communication_conversations')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->primary(['conversation_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('communication_conversation_participants');
        Schema::dropIfExists('communication_messages');
        Schema::dropIfExists('communication_conversations');
        Schema::dropIfExists('communication_notifications');
    }
};
