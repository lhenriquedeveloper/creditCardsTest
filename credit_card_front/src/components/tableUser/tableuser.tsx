"use client";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

interface Client {
  id: number;
  name: string;
  surname: string;
  email: string;
  address: string;
  phone: string;
}

export default function Tableuser() {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/user", config);
        console.log(response.data);
        setClients(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-row gap-x-4">
        <button className="btn btn-outline btn-primary">
          Cadastrar usuário
        </button>
        <button className="btn btn-outline btn-accent">
          Cadastrar cartão de crédito
        </button>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nome:</th>
              <th>Sobrenome</th>
              <th>Email:</th>
              <th>Endereço:</th>
              <th>Telefone:</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td>{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
