<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\MotosController;

// Ruta para pruebas
Route::get('/', function () {
    return view('welcome');
});

// Rutas de tu app
Route::get('/motos', [MotosController::class, 'index']);
Route::get('/pedidos', [PedidoController::class, 'index']);
Route::post('/pedidos', [PedidoController::class, 'store']);

// IMPORTANTE: Permitir preflight OPTIONS (CORS)
Route::options('{any}', function () {
    return response()->json([], 200);
})->where('any', '.*');
