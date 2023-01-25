import React, { useId } from "react";
import { useLocation } from "react-router";
import CoachCard from "../../components/CoachCard/CoachCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { coaches } from "../../utilities/coaches";
import "./Coaches.scss";

const Coaches: React.FunctionComponent = () => {
  const location = useLocation();
  const coachesFilterd = location.state 
  ? coaches.filter((coach) => coach.id !== location.state.id)
  : coaches;
  const coachesElement = coachesFilterd.map(coach => (
    <CoachCard
      key={useId()}
      id={coach.id}
      name={coach.name}
      img={coach.image}
      icon={coach.icon}
      type={coach.type}
      description={coach.description}
    />
  ))

  const options = {
    loop: true,
    center: true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 350,
    nav: false,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 1.5
      },
      600: {
        items: 2.5
      },
      900: {
        items: 3
      },
      1200: {
        items: 3.5
      },
      1400: {
        items: 4
      },
      1800: {
        items: 5
      },
    }
  };

  return (
    <section id="coaches" className="coaches">
      <SectionTitle title="Nasz skład trenerski" />
      <div className="coaches__container">
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          {coachesElement}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Coaches;
