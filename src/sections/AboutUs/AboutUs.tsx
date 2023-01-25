import React from "react";
import Article from "../../components/Article/Article";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import Card from "./subcomponents/Card";
import Discount from '../../assets/about-us/icons/discount.png';
import Diet from '../../assets/about-us/icons/diet.png';
import Contract from '../../assets/about-us/icons/contract.png';
import "./AboutUs.scss";

const AboutUs: React.FunctionComponent = () => {

  return (
    <section id="aboutus" className="aboutus">
      <div className="aboutus__intro">
        <SectionTitle title="poznaj nas lepiej" />
        <Article text=' Otworzyliśmy naszą siłownie bo świetnie zdajemy sobie sprawę
        z tego jak aktywność fizyczna jest ważna dla ciała i umysłu.
        W naszej ofercie znajdziesz zajęcia grupowe, takie jak zumba,
        joga czy treningi interwałowe. Możesz umówić się na indywidualne konsultacje
        z trenerem personalnym więcej o tym w sekcji trenerzy. Po treningu możesz
        skorzystać z sauny lub znajdującego się obok gabinety masażu. Więc jeżeli
        chcesz poprawić swoją kondycje fizyczną i odkryć jaki drzemie w tobie
        potencjał zapraszamy serdecznie.'/>
      </div>
      <PhotosGrid />
      <div className="aboutus__cards">
        <Card
          title="Dla młodszych i starszych"
          icon1={Discount}
          text="Doskonale zdajemy sobie sprawę z tego jak ważna jest aktywność
           fizyczna w każdym wieku.
           Dlatego przygotowaliśmy pakiet zniżek dla studentów oraz seniorów."
        />
        <Card
          title="Prawidłowe odżywianie"
          icon1={Diet}
          text=" Ciężko trenując ważne jest aby zadbać o prawidłowe odżywianie. Nasi
          trenerzy doradzą ci w tej kwestii i pomogą ułożyć plan dietetyczny."
        />
        <Card
          title="Bez kontraktu"
          icon1={Contract}
          text="Dopiero zaczynasz przygodę z siłownią u nas możesz skorzystać z
          miesiąca próbnego, po którym zdecydujesz czy chcesz zostać z nami na
          dłużej."
        />
      </div>
    </section>
  );
};

export default AboutUs;
