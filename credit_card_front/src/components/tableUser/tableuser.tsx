"use client";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import Carouselcards from "../carouselCards/carouselcards";
import { Client } from "../../interfaces/IClient";
import { Cards } from "@/interfaces/ICards";

export default function Tableuser() {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClientName, setSelectedClientName] = useState<string | null>(
    null
  );
  const [cards, setCards] = useState<Cards[]>([]);

  const handleClientSelect = (clientName: string, cards: Cards[]) => {
    setSelectedClientName(clientName);
    setCards(cards);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/user", config);
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
                <td>
                  <label htmlFor="cardmodal">
                    <i
                      className="bi bi-eye-fill hover:text-purple-600 duration-500 cursor-pointer"
                      onClick={() =>
                        handleClientSelect(client.name, client.cards)
                      }
                    ></i>
                  </label>
                </td>
                <td>
                  <i className="bi bi-trash3-fill hover:text-red-600 duration-500 cursor-pointer"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="checkbox" id="cardmodal" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Cartões de {selectedClientName}:
            </h3>
            <Carouselcards cards={cards} />
          </div>
          <label className="modal-backdrop" htmlFor="cardmodal"></label>
        </div>
      </div>
    </>
  );
}
