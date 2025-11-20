<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Motos extends Model
{

    protected $table = 'motos_uma';
    protected $fillable = [
        'url',
        'marca',
        'modelo',
        'nombre',
        'cilindraje',
        'potencia',
        'precio',
        'imagen'
    ];
}
