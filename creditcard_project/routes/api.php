<?php

use App\Http\Controllers\CreditcardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

//Users Routes
// Route::get('/user',[UserController::class,'index']);
// Route::get('/user/{id}',[UserController::class,'show']);
// Route::put('/user/{id}',[UserController::class,'update']);
// Route::delete('/user/{id}',[UserController::class,'destroy']);

//Card Routes
// Route::post('/card', [CreditcardController::class, 'store']);
// Route::get('/card',[CreditcardController::class,'index']);
// Route::get('/card/{id}',[CreditcardController::class,'show']);
// Route::put('/card/{id}',[CreditcardController::class,'update']);
// Route::delete('/card/{id}',[CreditcardController::class,'destroy']);
// Route::get('/card/user/{User_id}',[CreditcardController::class,'cardByUser']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResources([
        'user' => UserController::class,
        'card' => CreditcardController::class,
    ]);
});

//Auth Routes
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


