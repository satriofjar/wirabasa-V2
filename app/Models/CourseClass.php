<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseClass extends BaseModel
{
    protected $fillable = [
        'product_id',
        'topic',
        'zoom_link',
        'yt_link',
        'schedule',
        'poster',
        'is_active',
    ];

    protected $casts = [
        'schedule' => 'datetime',
        'is_active' => 'boolean',
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
