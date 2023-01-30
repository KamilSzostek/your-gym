import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { coaches, ICoach } from "../../utilities/coaches";
import "./Coaches.scss";
import Carousel from "./subcomponents/Carousel/Carousel";

interface ICoachesProps {
  coachesFiltered?: ICoach[];
}
const Coaches: React.FunctionComponent<ICoachesProps> = ({ coachesFiltered }) => {
  const coachesArr = coachesFiltered ? coachesFiltered : coaches;
  return (
    <section id="coaches" className="coaches">
      <SectionTitle title="Nasz skład trenerski" />
      <Carousel coachesArr={coachesArr} />
    </section >
  );
};

export default Coaches;
