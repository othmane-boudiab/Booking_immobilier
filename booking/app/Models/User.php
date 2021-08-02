<?php

namespace App\Models;
use App\Post;
use App\Service;
use App\Temoignage;
use App\Galerie;
use App\Partenaire;
use App\Commande;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'type',
        'image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',


    ];
    public function posts() {
        return $this->hasMany(Post::class);
    }

    public function service() {
        return $this->hasMany(Service::class);
    }

    public function Temoignage() {
        return $this->hasMany(Temoignage::class);
    }

    public function galerie() {
        return $this->hasMany(Galerie::class);
    }

    public function partenaire() {
        return $this->hasMany(Partenaire::class);
    }

    public function commande() {
        return $this->hasMany(Commande::class);
    }
}
