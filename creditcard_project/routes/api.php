<?php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;




//Users Routers
//Register User
Route::post('/user', [UserController::class, 'store']);
//Return User
Route::get('/user',[UserController::class,'index']);
//Return User by id
Route::get('/user/{id}',[UserController::class,'show']);
//Edit User by id
Route::put('/user/{id}',[UserController::class,'update']);


