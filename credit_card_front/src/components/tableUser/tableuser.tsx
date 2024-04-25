import { useEffect, useState } from "react";
import api from "../../services/api";
import { insertMaskInPhone } from "@/function/mask-phone/phone";
import FormRegisterClient from "../formRegisterClient/formRegisterClient";
import FormRegisterCard from "../formRegisterCard/formRegisterCard";
import { toast } from "react-toastify";
import Carouselcards from "../carouselCards/carouselcards";
import { Cards } from "@/interfaces/ICards";
import { Client } from "../../interfaces/IClient";

interface TableuserProps {
  searchQuery: string;
}

export default function Tableuser({ searchQuery }: TableuserProps) {
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

  const deleteClient = (id: number) => {
    api
      .delete(`/api/user/${id}`, config)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Cliente excluído com sucesso");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Erro ao excluir o cliente");
      });
  };

  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await api.get("/api/user", config);
        setClients(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getClients();
  }, []);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-row gap-x-4">
        {/* Modal Register Client */}
        <input type="checkbox" id="registerclient" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Cadastre aqui o seu cliente:</h3>
            <FormRegisterClient />
          </div>
          <label className="modal-backdrop" htmlFor="registerclient">
            Close
          </label>
        </div>
        {/* Modal Register Client */}
        {/* Modal Register Card */}
        <input type="checkbox" id="registercard" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Cadastre aqui o cartão do cliente:
            </h3>
            <FormRegisterCard clientes={clients} />
          </div>
          <label className="modal-backdrop" htmlFor="registercard">
            Close
          </label>
        </div>
        {/* Modal Register Card */}{" "}
        <label
          htmlFor="registerclient"
          className="btn btn-outline btn-primary cursor-pointer"
        >
          Cadastrar Usuário
        </label>
        <label
          className="btn btn-outline btn-accent cursor-pointer"
          htmlFor="registercard"
        >
          Cadastrar cartão de crédito
        </label>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
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
            {filteredClients.map((client, index) => (
              <tr key={index}>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td>{insertMaskInPhone(client.phone)}</td>
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
                  <i
                    className="bi bi-trash3-fill hover:text-red-600 duration-500 cursor-pointer"
                    onClick={() => deleteClient(client.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal Cards */}
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
        {/* Modal Cards */}
      </div>
    </>
  );
}
