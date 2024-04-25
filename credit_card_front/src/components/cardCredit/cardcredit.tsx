"use client";
import React, { useState } from "react";
import creditCardModel from "../../assets/credit-card.svg";
import Image from "next/image";
import { Cards } from "@/interfaces/ICards";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "@/services/api";

interface Props {
  cards: Cards;
}
const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const Cardcredit: React.FC<Props> = ({ cards }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteCard = async () => {
    try {
      const response = await api.delete(`/api/card/${cards.id}`, config);
      if (response.status === 200) {
        setShowConfirmation(false);
        toast.success("Cartão excluído com sucesso");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir o cartão");
    }
  };

  const formatExpirationDate = (expirationDate: string) => {
    if (
      expirationDate &&
      expirationDate.length === 10 &&
      expirationDate.includes("-")
    ) {
      const [year, month] = expirationDate.split("-");
      return `${month}/${year.slice(2)}`;
    } else {
      return expirationDate;
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4">
      <figure>
        <Image className="w-full" src={creditCardModel} alt="Credit Card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cards.name}</h2>
        <h4 className="font-semibold">Data de Validade:</h4>
        <p>{formatExpirationDate(cards.valid_date)}</p>
        <h4 className="font-semibold">Número do Cartão:</h4>
        <p>{cards.number}</p>
        <h4 className="font-semibold">CVV:</h4>
        <p>{cards.cvv}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => setShowConfirmation(true)}
          >
            Excluir Cartão
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 rounded-xl">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-black">Deseja realmente excluir esse cartão?</p>
            <div className="flex justify-end mt-4">
              <button
                className="btn btn-primary mr-2"
                onClick={handleDeleteCard}
              >
                Sim
              </button>
              <button
                className="btn btn-primary btn-outline"
                onClick={() => setShowConfirmation(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Cardcredit;
