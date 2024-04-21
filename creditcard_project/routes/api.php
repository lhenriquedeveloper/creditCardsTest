<?php

use App\Http\Controllers\CreditcardController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//Users Routes
//Register User
Route::post('/user', [UserController::class, 'store']);
//Return User
Route::get('/user',[UserController::class,'index']);
//Return User by id
Route::get('/user/{id}',[UserController::class,'show']);
//Edit User by id
Route::put('/user/{id}',[UserController::class,'update']);
//Delete User by id
Route::delete('/user/{id}',[UserController::class,'destroy']);

//Credit Card Routes
Route::post('/card', [CreditcardController::class, 'store']);
//Return User
Route::get('/card',[CreditcardController::class,'index']);
//Return User by id
Route::get('/card/{id}',[CreditcardController::class,'show']);
//Edit User by id
Route::put('/card/{id}',[CreditcardController::class,'update']);
//Delete User by id
Route::delete('/card/{id}',[CreditcardController::class,'destroy']);
