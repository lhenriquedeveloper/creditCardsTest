<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'name' => 'required|string',
            'surname' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
            'address' => 'required|string',
            'phone' => 'required|string|unique:users,phone',
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'surname' => $fields['surname'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'address' => $fields['address'],
            'phone' => $fields['phone'],
        ]);
        $token = $user ->createToken($request->nameToken)->plainTextToken;
        return response([
            'message' => 'Usuário criado com sucesso',
            'user' => $user,
            'token' => $token,
        ], 201);
    }


}
