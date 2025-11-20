<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;


class PedidoController extends Controller
{
    public function index()
    {
        return Pedido::all();
    }

    public function store(Request $request)
    {
        $pedido = Pedido::create($request->all());
        return response()->json($pedido, 201);
    }
}
