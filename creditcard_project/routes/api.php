<?php

use App\Http\Controllers\CreditcardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

//Users Manager Routes
//Return User
Route::get('/user',[UserController::class,'index']);
//Return User by id
Route::get('/user/{id}',[UserController::class,'show']);
//Edit User by id
Route::put('/user/{id}',[UserController::class,'update']);
//Delete User by id
Route::delete('/user/{id}',[UserController::class,'destroy']);


//Auth Router
//Create User
Route::post('/register',[AuthController::class,'register']);

//Credit Card Routes
//Create Credit Card
Route::post('/card', [CreditcardController::class, 'store']);
//Return Credits Cards
Route::get('/card',[CreditcardController::class,'index']);
//Return Cards by User
Route::get('/card/{id}',[CreditcardController::class,'show']);
//Return Card by id
Route::put('/card/{id}',[CreditcardController::class,'update']);
//Delete Card by id
Route::delete('/card/{id}',[CreditcardController::class,'destroy']);
//Show Cards by User
Route::get('/card/user/{User_id}',[CreditcardController::class,'cardByUser']);


