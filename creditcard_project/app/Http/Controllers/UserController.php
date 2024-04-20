<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(count($request->all()) === 0) {
            return response()->json(['message' => 'Nenhum dado fornecido para criação do usuário'], 422);
        }

        // Tenta atualizar o usuário
        try {
            return User::create($request->all());
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar o usuário: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return User::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        // Verifica se existem campos no objeto de solicitação
        if(count($request->all()) === 0) {
            return response()->json(['message' => 'Nenhum dado fornecido para atualização'], 422);
        }

        // Tenta atualizar o usuário
        try {
            $user->update($request->all());
            return $user;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar o usuário: ' . $e->getMessage()], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
