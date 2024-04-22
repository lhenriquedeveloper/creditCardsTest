<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory,HasApiTokens,Notifiable;
    protected $primaryKey = "id";
    protected $fillable = [
        'name',
        'surname',
        'email',
        'address',
        'phone',
        'password',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
}
