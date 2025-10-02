<?php

namespace App\Models;

class OrderEditing extends BaseModel
{

    protected $fillable = [
        'order_id',
        'file_input',
        'pages',
        'file_result',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
