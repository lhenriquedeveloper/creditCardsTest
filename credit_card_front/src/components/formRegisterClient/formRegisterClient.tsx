import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importe o toast
import "react-toastify/dist/ReactToastify.css"; // Importe o CSS do toast
import api from "../../services/api";
import viaCep from "@/services/viaCep";
import { insertMaskInPhone } from "@/function/mask-phone/phone";

export default function FormRegisterClient() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleRegister = async () => {
    try {
      const response = await api.post(
        "/api/user",
        {
          name: name,
          surname: surname,
          email: email,
          address: address,
          phone: phone,
        },
        config
      );
      console.log(response.data);
      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const maskedPhone = insertMaskInPhone(e.target.value);

    setPhone(maskedPhone);
  };

  const getAddressByCEP = async () => {
    try {
      const response = await viaCep.get(`/${cep}/json`, {});
      if (response) {
        setAddress(
          response.data.logradouro +
            ", " +
            response.data.bairro +
            ", " +
            response.data.localidade +
            " - " +
            response.data.uf
        );
      } else {
        setAddress("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card-body">
      <ToastContainer /> {/* Container de toasts */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nome:</span>
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
          <span className="label-text">Sobrenome:</span>
        </label>
        <input
          type="text"
          placeholder="Sobrenome"
          className="input input-bordered placeholder:italic"
          required
          maxLength={50}
          autoComplete="off"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          value={surname}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email:</span>
        </label>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered placeholder:italic"
          required
          maxLength={50}
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">CEP:</span>
        </label>
        <div className="grid grid-cols-6 gap-x-4">
          <input
            type="text"
            placeholder="CEP"
            className="input input-bordered placeholder:italic col-span-5"
            required
            maxLength={50}
            autoComplete="off"
            onChange={(e) => {
              setCep(e.target.value);
            }}
            value={cep}
          />
          <button className="btn btn-outline" onClick={getAddressByCEP}>
            <i className="bi bi-search col-span-1"></i>
          </button>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Endereço:</span>
        </label>
        <input
          type="text"
          placeholder="Endereço"
          className="input input-bordered placeholder:italic"
          required
          maxLength={60}
          autoComplete="off"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Telefone:</span>
        </label>
        <input
          type="text"
          placeholder="Telefone"
          className="input input-bordered placeholder:italic"
          required
          autoComplete="off"
          maxLength={10}
          onChange={handlePhoneChange}
          value={phone}
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" onClick={handleRegister}>
          Cadastrar Usuário
        </button>
      </div>
    </div>
  );
}
