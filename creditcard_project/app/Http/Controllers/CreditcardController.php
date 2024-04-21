<?php

namespace App\Http\Controllers;
use App\Models\Creditcard;
use Illuminate\Http\Request;

class CreditcardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Tenta exibir os usuários
        try{
            return Creditcard::all();
        }
        catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir os cartões: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Verifica se existem campos no objeto de solicitação
        if(count($request->all()) === 0) {
            return response()->json(['message' => 'Nenhum dado fornecido para criação do cartão'], 422);
        }

        // Tenta criar o usuário
        try {
            return Creditcard::create($request->all());
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar o cartão: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
     // Verifica se o ID foi fornecido (válido)
    {
        if(!is_numeric($id)) {
            return response()->json(['message' => 'O ID fornecido não é um número'], 422);
        }
        elseif(Creditcard::find($id) === null) {
            return response()->json(['message' => 'O ID fornecido não existe'], 404);
        }
        elseif(!Creditcard::find($id)) {
            return response()->json(['message' => 'Não foi fornecido um ID'], 422);
        }
        // Tenta exibir o usuário
        try {
            return Creditcard::findOrFail($id);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir o cartão: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $user = Creditcard::findOrFail($id);
        // Verifica se existem campos no objeto de solicitação, ou se o ID foi fornecido (válido)
        if(count($request->all()) === 0) {
            return response()->json(['message' => 'Nenhum dado fornecido para atualização'], 422);
        }
        elseif(!is_numeric($id)) {
            return response()->json(['message' => 'O ID fornecido não é um número'], 422);
        }
        elseif(Creditcard::find($id) === null) {
            return response()->json(['message' => 'O ID fornecido não existe'], 404);
        }
        elseif(!Creditcard::find($id)) {
            return response()->json(['message' => 'Não foi fornecido um ID'], 422);
        }
        // Tenta atualizar o usuário
        try {
            $user->update($request->all());
            return $user;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar o cartão: ' . $e->getMessage()], 500);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        // Verifica se o ID foi fornecido (válido)
        if(!is_numeric($id)) {
            return response()->json(['message' => 'O ID fornecido não é um número'], 422);
        }
        elseif(Creditcard::find($id) === null) {
            return response()->json(['message' => 'O ID fornecido não existe'], 404);
        }
        elseif(!Creditcard::find($id)) {
            return response()->json(['message' => 'Não foi fornecido um ID'], 422);
        }
        // Tenta excluir o usuário
        try{
            Creditcard::destroy($id);
            return response()->json(['message' => 'Cartão excluído com sucesso'], 200);
        }
        catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao excluir o cartão' .$e->getMessage()], 500);
        }

    }
}
