import React from "react";
import { Link } from "react-router-dom";
import "./CoachCard.scss";

interface ICoachCardProps {
  id: number;
  name: string;
  img: string;
  icon: string;
  type: string;
  description: string;
}

const CoachCard: React.FunctionComponent<ICoachCardProps> = (props) => {
  const { id, name, img, icon, description } = props;
  const reservationPath = `/reservation/${name}-${id}`;

  return (
    <div className="coach">
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

export default CoachCard;
