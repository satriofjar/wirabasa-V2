<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends BaseModel
{
    protected $fillable = [
        'order_id',
        'method',
        'amount',
        'proof',
        'status',
        'transaction_id',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
