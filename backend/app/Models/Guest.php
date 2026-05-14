<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

class Guest extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'phone',
        'is_attending',
        'message',
        'attendance_count',
    ];

    protected static function booted()
    {
        static::creating(function ($guest) {
            if (empty($guest->slug)) {
                $guest->slug = Str::slug($guest->name);
            }
        });
    }
}
