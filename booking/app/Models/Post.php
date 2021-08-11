<?php

namespace App\Models;
// use App\Categorie;
// use App\Ville;
use App\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;


    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d',
    ];


    public $guarded = [''];
    public function categorie() {
        return $this->belongsTo(Categorie::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function ville() {
        return $this->belongsTo(Ville::class);
    }

    public function commande() {
        return $this->hasMany(Commande::class);
    }
}
