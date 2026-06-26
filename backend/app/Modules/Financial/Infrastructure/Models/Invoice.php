<?php

namespace App\Modules\Financial\Infrastructure\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Invoice extends Model
{
    use HasUuids;

    protected $table = 'financial_invoices';
    protected $fillable = [
        'transaction_id', 'invoice_number', 'billing_details',
        'line_items', 'subtotal', 'tax_amount', 'total',
        'issued_at', 'due_at'
    ];

    protected $casts = [
        'billing_details' => 'array',
        'line_items' => 'array',
        'issued_at' => 'datetime',
        'due_at' => 'datetime',
        'subtotal' => 'float',
        'tax_amount' => 'float',
        'total' => 'float',
    ];

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }
}
