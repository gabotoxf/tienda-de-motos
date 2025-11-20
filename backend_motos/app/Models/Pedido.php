<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $filltable = [
        'nombre_cliente',
        'telefono',
        'email',
        'documento',
        'moto',
        'cantidad',
        'color',
        'comentario',
    ];
}
