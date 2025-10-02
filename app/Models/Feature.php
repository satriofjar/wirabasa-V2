<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Feature extends BaseModel
{

    protected $fillable = [
        'product_id',
        'name',
    ];


    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
