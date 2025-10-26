<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends BaseModel
{
    protected $fillable = [
        'name',
        'position',
        'message',
    ];
}
