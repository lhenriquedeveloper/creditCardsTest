import creditCardModel from "../../assets/credit-card.svg";
import Image from "next/image";
import { Cards } from "@/app/interfaces/ICards";

interface Props {
  cards: Cards;
}

const Cardcredit: React.FC<Props> = ({ cards }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4">
      <figure>
        <Image className="w-full" src={creditCardModel} alt="Credit Card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cards.name}</h2>
        <h4 className="font-semibold">Data de Validade:</h4>
        <p>{cards.valid_date}</p>
        <h4 className="font-semibold">Número do Cartão:</h4>
        <p>{cards.number}</p>
        <h4 className="font-semibold">CVV:</h4>
        <p>{cards.cvv}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Excluir Cartão</button>
        </div>
      </div>
    </div>
  );
};

export default Cardcredit;
