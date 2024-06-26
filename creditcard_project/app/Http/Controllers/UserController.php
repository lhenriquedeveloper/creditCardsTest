<?php
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
class UserController extends Controller
{
    public function store(Request $request)
    {
        // Verifica se existem campos no objeto de solicitação
        if(count($request->all()) === 0) {
            return response()->json(['message' => 'Nenhuma informação fornecida para criação do cliente'], 422);
        }
        // Tenta criar o cartão
        try {
            return User::create($request->all());
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar o cliente: ' . $e->getMessage()], 500);
        }
    }
    public function index()
    {
        // Tenta exibir os usuários
        try{
            return User::with('cards')->get();
        }
        catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir os clientes: ' . $e->getMessage()], 500);
        }
    }
    public function show(int $id)
     // Verifica se o ID foi fornecido (válido)
    {
        if(!is_numeric($id)) {
            return response()->json(['message' => 'O ID fornecido não é um número'], 422);
        }
        elseif(User::find($id) === null) {
            return response()->json(['message' => 'O ID fornecido não existe'], 404);
        }
        elseif(!User::find($id)) {
            return response()->json(['message' => 'Não foi fornecido um ID'], 422);
        }
        // Tenta exibir o usuário
        try {
            return User::findOrFail($id);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir o cliente: ' . $e->getMessage()], 500);
        }
    }
    public function update(Request $request, int $id)
    {
        $user = User::findOrFail($id);
        // Verifica se existem campos no objeto de solicitação, ou se o ID foi fornecido (válido)
        if(count($request->all()) === 0) {
            return response()->json(['message' => 'Nenhum dado fornecido para atualização'], 422);
        }
        elseif(!is_numeric($id)) {
            return response()->json(['message' => 'O ID fornecido não é um número'], 422);
        }
        elseif(User::find($id) === null) {
            return response()->json(['message' => 'O ID fornecido não existe'], 404);
        }
        elseif(!User::find($id)) {
            return response()->json(['message' => 'Não foi fornecido um ID'], 422);
        }
        // Tenta atualizar o usuário
        try {
            $user->update($request->all());
            return $user;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar o cliente: ' . $e->getMessage()], 500);
        }
    }
    public function destroy(int $id)
    {
        // Verifica se o ID foi fornecido (válido)
        if(!is_numeric($id)) {
            return response()->json(['message' => 'O ID fornecido não é um número'], 422);
        }
        elseif(User::find($id) === null) {
            return response()->json(['message' => 'O ID fornecido não existe'], 404);
        }
        elseif(!User::find($id)) {
            return response()->json(['message' => 'Não foi fornecido um ID'], 422);
        }
        // Tenta excluir o usuário
        try{
            User::destroy($id);
            return response()->json(['message' => 'Usuário excluído com sucesso'], 200);
        }
        catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao excluir o cliente' .$e->getMessage()], 500);
        }

    }
}
