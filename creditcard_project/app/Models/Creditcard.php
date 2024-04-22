<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Creditcard extends Model
{
    use HasFactory;
    protected $primaryKey = "id";
    protected $fillable = [
        'name',
        'number',
        'cvv',
        'valid_date',
        'user_id',
    ];
}
