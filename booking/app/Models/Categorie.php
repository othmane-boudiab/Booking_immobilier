<?php

namespace App\Models;
use App\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;
    public $guarded = [''];
    public function posts() {
        return $this->hasMany(Post::class);
    }

}
