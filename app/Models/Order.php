<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends BaseModel
{
    protected $fillable = [
        'user_id',
        'product_id',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }

    // relasi tambahan
    public function orderEditing()
    {
        return $this->hasOne(OrderEditing::class);
    }
}
