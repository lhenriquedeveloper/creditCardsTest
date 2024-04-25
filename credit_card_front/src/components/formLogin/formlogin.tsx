"use client";
import { useState } from "react";
import FormRegister from "../formRegister/formRegister";
import api from "../../services/api";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/login", {
        email: email,
        password: password,
      });
      let token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Credit Card Manager</h1>
          <p className="py-6 italic">
            Bem-vindo ao Credit Card Manager, sua solução completa para
            gerenciar seus cartões de crédito com facilidade e segurança!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                maxLength={50}
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
                maxLength={50}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <label className="label">
                <label
                  htmlFor="form_register"
                  className="label-text-alt link link-hover"
                >
                  Não tem uma conta? Cadastre-se aqui
                </label>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
          <input type="checkbox" id="form_register" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Faça seu cadastro abaixo:</h3>
              <FormRegister />
            </div>
            <label className="modal-backdrop" htmlFor="form_register"></label>
          </div>
        </div>
      </div>
    </div>
  );
}
