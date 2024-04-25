import creditCardModel from "../../assets/credit-card.svg";
import Image from "next/image";

export default function Carouselcards() {
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl mt-4">
        <figure>
          <Image className="w-full" src={creditCardModel} alt="Credit Card" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Nome do Cartão</h2>
          <h4 className="font-semibold">Data de Validade:</h4>
          <p>02/24</p>
          <h4 className="font-semibold">Número do Cartão:</h4>
          <p>0000 0000 0000 0000</p>
          <h4 className="font-semibold">CVV:</h4>
          <p>123</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Excluir Cartão</button>
          </div>
        </div>
      </div>
    </div>
  );
}
