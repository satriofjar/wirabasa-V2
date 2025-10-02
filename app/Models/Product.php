<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends BaseModel
{

    protected $fillable = [
        'category_id',
        'name',
        'price',
        'discount',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    // relasi
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function features()
    {
        return $this->hasMany(Feature::class);
    }

    public function courseClass()
    {
        return $this->hasOne(CourseClass::class);
    }

    // accessor harga setelah diskon
    public function getFinalPriceAttribute()
    {
        return $this->price - ($this->price * $this->discount / 100);
    }
}
