import React, { useId, useRef } from "react";
import CoachCard from "../../components/CoachCard/CoachCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { coaches, ICoach } from "../../utilities/coaches";
import "./Coaches.scss";

interface ICoachesProps {
  coachesFiltered?: ICoach[];
}

const Coaches: React.FunctionComponent<ICoachesProps> = ({ coachesFiltered }) => {
  const dotsRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const slideToCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current!;
    const transformX = parseInt(window.getComputedStyle(wrapper).getPropertyValue("transform").split(',')[4]);
    const id = parseInt(e.currentTarget.id);
    const length = e.currentTarget.parentNode?.childNodes.length!;
    wrapper.style.transform = `translateX(${wrapper.offsetWidth * (id / length)}px)`
  }

  const coachesElement = coachesFiltered
    ? ([...coachesFiltered, ...coachesFiltered]?.map((coach, key) => (
      <CoachCard
        key={useId()}
        index={key + 1}
        id={coach.id}
        name={coach.name}
        img={coach.image}
        icon={coach.icon}
        type={coach.type}
        description={coach.description}
      />
    )))
    : ([...coaches, ...coaches]?.map((coach, key) => (
      <CoachCard
        key={useId()}
        index={key + 1}
        id={coach.id}
        name={coach.name}
        img={coach.image}
        icon={coach.icon}
        type={coach.type}
        description={coach.description}
      />
    )))

  const dotElements = coachesFiltered
    ? (coachesFiltered?.map((coach, key) => {
      const dotClass = `dot${key + 1} dot${key + 1 + coachesFiltered.length}`
      return (
        <div key={useId()} style={{minWidth: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', transition: '0.5s'}} id={(key + 1).toString()} className={dotClass} onClick={slideToCard} />)
    }))
    : (coaches?.map((coach, key) => {
      const dotClass = `dot dot${key + 1} dot${key + 1 + coaches.length}`
      return (
        <div key={useId()} id={(key + 1).toString()} className={dotClass} onClick={slideToCard} />)
    }))

  return (
    <section id="coaches" className="coaches">
      <SectionTitle title="Nasz skład trenerski" />
      <div className="coaches__container"
        onMouseEnter={() => wrapperRef.current?.classList.add('paused')}
        onMouseLeave={() => wrapperRef.current?.classList.remove('paused')}>
        <div className="wrapper" ref={wrapperRef}>
          {coachesElement}
        </div>
        <div className="dots" ref={dotsRef}>
          {dotElements}
        </div>
      </div>
    </section >
  );
};

export default Coaches;
