"use client";
import { useState } from "react";
import api from "../../services/api";

export default function FormRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await api.post("/api/register", {
        email: email,
        password: password,
        password_confirmation: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email:</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered placeholder:italic"
          required
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Senha:</span>
        </label>
        <input
          type="password"
          placeholder="Senha"
          className="input input-bordered placeholder:italic"
          required
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" onClick={handleRegister}>
          Criar Conta
        </button>
      </div>
    </div>
  );
}
