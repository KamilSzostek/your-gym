import React, { useId } from "react";
import CoachCard from "../../components/CoachCard/CoachCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { options } from "../../utilities/carouselOptions";
import { coaches, ICoach } from "../../utilities/coaches";
import "./Coaches.scss";

interface ICoachesProps {
  coachesFiltered?: ICoach[];
}

const Coaches: React.FunctionComponent<ICoachesProps> = ({ coachesFiltered }) => {

  const coachesElement = coachesFiltered
    ? (coachesFiltered?.map(coach => (
      <CoachCard
        key={useId()}
        id={coach.id}
        name={coach.name}
        img={coach.image}
        icon={coach.icon}
        type={coach.type}
        description={coach.description}
      />)))
    : (coaches?.map(coach => (
      <CoachCard
        key={useId()}
        id={coach.id}
        name={coach.name}
        img={coach.image}
        icon={coach.icon}
        type={coach.type}
        description={coach.description}
      />)))

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
