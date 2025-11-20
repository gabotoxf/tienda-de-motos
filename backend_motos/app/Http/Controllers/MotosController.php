<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Motos;


class MotosController extends Controller
{
    public function index()
    {
        return Motos::all();
    }

    public function store(Request $request)
    {
        $pedido = Motos::create($request->all());
        return response()->json($pedido, 201);
    }
}
