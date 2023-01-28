import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CoachCard.scss";

interface ICoachCardProps {
  index: number;
  id: number;
  name: string;
  img: string;
  icon: string;
  type: string;
  description: string;
}

const CoachCard: React.FunctionComponent<ICoachCardProps> = (props) => {
  const { index, id, name, img, icon, description } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const dot = document.body.querySelector(`.dot${index}`);
    const interval1 = setInterval(() => {
      if (isCardInTheMiddleSector()) {
        dot?.classList.add('activeted');
      }
    }, 50)
    const interval2 = setInterval(() => {
      if (dot?.classList.contains('activeted') && !isCardInTheMiddleSector())
        dot?.classList.remove('activeted');
    }, 1000)
})

const isCardInTheMiddleSector = () => {
  const card = cardRef.current;
  const cardHalfWidth = card?.offsetWidth! / 2;
  const cardDistanceToLeftBorder = card?.getBoundingClientRect().left!;
  const viewportMiddle = window.innerWidth / 2;
  if (((viewportMiddle + cardHalfWidth) >= cardDistanceToLeftBorder)
    && ((viewportMiddle - cardHalfWidth) <= cardDistanceToLeftBorder))
    return true;
  else
    return false;
}

const reservationPath = `/reservation/${name}-${id}`;

return (
  <div className='coach' ref={cardRef}>
    <h4>
      {name} <img src={icon} alt="" />
    </h4>
    <img className="coach__image" src={img} alt={name} />
    <p>{description}</p>
    <div className="coach__link">
      <Link to={reservationPath} state={props}>Zarezerwuj trening</Link>
    </div>
    <div className="coach__bg-cover" />
  </div>
);
};

export default React.memo(CoachCard);
