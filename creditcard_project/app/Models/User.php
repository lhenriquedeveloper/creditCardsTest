<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Creditcard;

class User extends Model
{
    use HasFactory;
    protected $primaryKey = "id";
    protected $fillable = [
        'name',
        'surname',
        'email',
        'address',
        'phone',

    ];
    public function cards(){
        return $this->hasMany(Creditcard::class);
    }
}
