<?php

namespace App\Http\Controllers;
use App\Models\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
        ]);
        $auth = Auth::create([
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
        ]);

        return response([
            'message' => 'Usuário criado com sucesso',
            'user' => $auth,
        ], 201);
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        //Check email
        $auth = Auth::where('email', $fields['email'])->first();

        //Check password
        if(!$auth || !Hash::check($fields['password'], $auth->password)){
            return response([
                'message' => 'Credenciais inválidas'
            ], 401);
        }

        $token = $auth ->createToken('Usuario Logado')->plainTextToken;
        return response([
            'message' => 'Login realizado com sucesso',
            'user' => $auth,
            'token' => $token,
        ], 201);
    }

}
