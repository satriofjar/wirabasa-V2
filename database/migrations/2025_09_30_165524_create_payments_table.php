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
        Schema::create('payments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('order_id')->constrained()->onDelete('cascade');
            $table->bigInteger('amount');
            $table->string('proof')->nullable(); // bukti transfer / receipt file
            $table->enum('method', ['manual_transfer', 'va_bca', 'va_bni', 'gopay', 'ovo'])->default('manual_transfer');
            $table->enum('status', ['pending', 'success', 'failed'])->default('pending');
            $table->string('transaction_id', 100)->nullable(); // id dari payment gateway
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
