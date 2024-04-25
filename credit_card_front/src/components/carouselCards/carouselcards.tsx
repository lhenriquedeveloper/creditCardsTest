import React from "react";
import { Cards } from "@/interfaces/ICards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cardcredit from "../cardCredit/cardcredit";

interface Props {
  cards: Cards[];
}

const Carouselcards: React.FC<Props> = ({ cards }) => {
  return (
    <Swiper>
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <Cardcredit cards={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carouselcards;
