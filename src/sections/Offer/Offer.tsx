import React, { useRef } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SwipeButtons from '../../components/SwipeButtons/SwipeButtons';
import Card from "./subcomponents/Card/Card";
import Table from "./subcomponents/Table/Table";
import Membership from "./subcomponents/Membership";
import { card1Data, card2Data, card3Data } from "../../utilities/offersData";
import "./Offer.scss";

const Offer: React.FunctionComponent = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  const tableElement = (
    <div className="table__container">
      <Table
        thead={card1Data.data.head}
        tbody={card1Data.data.body}
      />
    </div>)


  return (
    <section id="offer" className="offer">
      <SectionTitle title="Nasza oferta" />
      <div className="offer__container">
        <SwipeButtons cardsRef={cardsRef} cardClass='offer__card' />
        <div className="offer__container__cards" ref={cardsRef}>
          <Card active='active' title={card1Data.title} comp={tableElement} />
          <Card title={card2Data.title} comp={<p>{card2Data.data}</p>} />
          <Card title={card3Data.title} comp={<p>{card3Data.data}</p>} />
        </div>
      </div>
      <Membership />
    </section>
  );
};

export default Offer;
