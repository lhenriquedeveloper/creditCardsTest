import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { insertMaskInDate } from "@/function/mask-date/date";
import { Client } from "@/interfaces/IClient";

interface FormRegisterCardProps {
  clientes: Client[]; // Defina a propriedade clientes como um array de objetos Client
}

export default function FormRegisterCard({ clientes }: FormRegisterCardProps) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [valid_date, setValidDate] = useState("");
  const [user_id, setUserId] = useState("");

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleRegister = async () => {
    try {
      const response = await api.post(
        "/api/card",
        {
          name: name,
          number: number,
          cvv: cvv,
          valid_date: valid_date,
          user_id: user_id,
        },
        config
      );
      console.log(response.data);
      toast.success("Cartão cadastrado com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMaskDate = (e: { target: { value: string } }) => {
    const maskedDate = insertMaskInDate(e.target.value);
    setValidDate(maskedDate);
  };

  return (
    <div className="card-body">
      <ToastContainer />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nome do Cartão:</span>
        </label>
        <input
          type="text"
          placeholder="Nome"
          className="input input-bordered placeholder:italic"
          required
          maxLength={50}
          autoComplete="off"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Número do Cartão:</span>
        </label>
        <input
          type="text"
          placeholder="Número do Cartão"
          className="input input-bordered placeholder:italic"
          required
          maxLength={50}
          autoComplete="off"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">CVV:</span>
        </label>
        <input
          type="text"
          placeholder="CVV"
          className="input input-bordered placeholder:italic"
          required
          maxLength={3}
          autoComplete="off"
          onChange={(e) => {
            setCvv(e.target.value);
          }}
          value={cvv}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Data de Validade:</span>
        </label>
        <input
          type="text"
          placeholder="Data de Validade"
          className="input input-bordered placeholder:italic"
          required
          autoComplete="off"
          maxLength={8}
          onChange={handleMaskDate}
          value={valid_date}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Usuário:</span>
        </label>
        <select
          className="select select-bordered w-full"
          onChange={(e) => setUserId(e.target.value)}
          value={user_id}
        >
          <option value="">Selecione um usuário</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" onClick={handleRegister}>
          Cadastrar Cartão
        </button>
      </div>
    </div>
  );
}
