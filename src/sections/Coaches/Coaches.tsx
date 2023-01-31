import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { coaches, ICoach } from "../../utilities/coaches";
import Carousel from "./subcomponents/Carousel/Carousel";
import "./Coaches.scss";

interface ICoachesProps {
  coachesFiltered?: ICoach[];
}
const Coaches: React.FunctionComponent<ICoachesProps> = ({ coachesFiltered }) => {
  const [rerender, setRerender] = useState(false);
  const coachesArr = coachesFiltered ? coachesFiltered : coaches;

  useEffect(() => {
    setRerender(!rerender);
  }, [coachesArr])

  return (
    <section id="coaches" className="coaches">
      <SectionTitle title="Nasz skład trenerski" />
      <Carousel coachesArr={coachesArr} />
    </section >
  );
};

export default Coaches;
