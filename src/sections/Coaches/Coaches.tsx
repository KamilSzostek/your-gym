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
let animation: number;

const Coaches: React.FunctionComponent<ICoachesProps> = ({ coachesFiltered }) => {
  cancelAnimationFrame(animation);
  const dotsRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  let leftpos = 0;
  let isPaused = false;
  let isDragStart = false, prevPageX: number, prevScollLeft: number;
  let maxPosition = 50.695;
  function step(timestamp: number) {
    setTimeout(function () {
      leftpos += 0.05;
      const wrapper = wrapperRef.current!;
      if (wrapper)
        wrapper.style.transform = `translateX(-${leftpos}%)`;
      if (window.innerWidth > 992) {
        maxPosition = 50.595
      }
      if (leftpos > maxPosition) {
        leftpos = 0
      }

      if (!isPaused)
        requestAnimationFrame(step)
    }, 1000 / 60)
  }

  animation = window.requestAnimationFrame(step);

  const mouseEnter = () => {
    isPaused = true;
  }
  const mouseLeave = () => {
    isPaused = false;
    isDragStart = false;
    animation = window.requestAnimationFrame(step);
    wrapperRef.current?.classList.remove('draging')
  }
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragStart = true
    prevScollLeft = wrapperRef.current?.scrollLeft!;
  }
  const touchStop = (e: React.TouchEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current!;
    wrapper.classList.remove('draging')
    isDragStart = false;
  }
  const touching = (e: React.TouchEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current!;
    const translateX = parseInt(wrapper.style.transform.split('(')[1]);
    if (isDragStart) {
      const pageX = e.touches[0].pageX / window.innerWidth*2;
      let posDiff = 0;
      posDiff = translateX - pageX;
      if (posDiff > (-maxPosition)) {
        wrapper.style.transform = `translateX(${posDiff}%)`;
      }
      wrapper.classList.add('draging')
    }
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

  const swipeHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current!;
    const id = parseInt(e.currentTarget.id);
    const screenSizeDiff = window.innerWidth / 100 - 5;
    const pos = id * (maxPosition / (coachesElement.length / 2)) - screenSizeDiff;
    if (pos < 0)
      leftpos = maxPosition - screenSizeDiff;
    else
      leftpos = pos;
    wrapper.classList.add('transition-500');
    isPaused = true;
    setTimeout(() => {
      isPaused = false;
      animation = requestAnimationFrame(step);
      wrapper.classList.remove('transition-500');
    }, 1000)
  }
  const dotElements = coachesFiltered
    ? (coachesFiltered?.map((coach, key) => {
      const dotClass = `dot dot${key + 1} dot${key + 1 + coachesFiltered.length}`
      const idClass = key === 0 ? coachesFiltered?.length - 1 : key - 1;
      return (
        <div key={useId()} id={(idClass).toString()} className={dotClass} onClick={swipeHandle} />)
    }))
    : (coaches?.map((coach, key) => {
      const dotClass = `dot dot${key + 1} dot${key + 1 + coaches.length}`;
      const idClass = key === 0 ? coaches?.length - 1 : key - 1;
      return (
        <div key={useId()} id={(idClass).toString()} className={dotClass} onClick={swipeHandle} />)
    }))


  return (
    <section id="coaches" className="coaches">
      <SectionTitle title="Nasz skład trenerski" />
      <div className="coaches__container">
        <div
          className="wrapper"
          ref={wrapperRef}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onTouchStart={touchStart}
          onTouchMove={touching}
          onTouchEnd={touchStop}
        >
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
