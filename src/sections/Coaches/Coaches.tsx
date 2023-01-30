import React, { useId, useRef } from "react";
import CoachCard from "../../components/CoachCard/CoachCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
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
  const coachesArr = coachesFiltered ? coachesFiltered : coaches;
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
    if (window.innerWidth >= 992)
      isPaused = true;
  }
  const mouseLeave = () => {
    if (window.innerWidth >= 992) {
      isPaused = false;
      animation = window.requestAnimationFrame(step);
    }
  }
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragStart = true
  }
  const touchStop = (e: React.TouchEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current!;
    wrapper.classList.remove('draging')
    isDragStart = false;
    isPaused = false;
  }

  const touching = (e: React.TouchEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current!;
    const translateX = parseInt(wrapper.style.transform.split('(')[1]);
    if (isDragStart) {
      const pageX = e.touches[0].pageX / window.innerWidth;
      let posDiff = 0;
      posDiff = translateX - pageX - 0.2;
      if (posDiff > (-maxPosition)) {
        wrapper.style.transform = `translateX(${posDiff}%)`;
      }
      else
        wrapper.style.transform = `translateX(0%)`;
      leftpos = -posDiff;
      wrapper.classList.add('draging')
    }
  }

  const swipeHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current!;
    const id = parseInt(e.currentTarget.id);
    const screenSizeDiff = window.innerWidth / 100 - 5;
    const pos = id * (maxPosition / (coachesElement.length / 2)) - screenSizeDiff;
    console.log(id);
    if (pos < 0)
      leftpos = maxPosition - screenSizeDiff + id * 10;
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

  const dotElements = coachesArr?.map((coach, key) => {
      const dotClass = `dot dot${key + 1} dot${key + 1 + coachesArr.length}`
      const idClass = key === 0 ? coachesArr?.length - 1 : key - 1;
      return (
        <div key={useId()} id={(idClass).toString()} className={dotClass} onClick={swipeHandle} />)
    })

  const coachesElement = [...coachesArr, ...coachesArr]?.map((coach, key) => (
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
  ))

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
