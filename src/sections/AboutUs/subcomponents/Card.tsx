import React, { useEffect, useRef } from "react";
import './Card.scss';

interface ICardProps {
  title: string;
  icon1: string;
  text: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const { title, icon1, text } = props;

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current!;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("move-up");
      }
    });

    observer.observe(card);
  }, []);

  useEffect(() => {
    const card = cardRef.current!;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        card.classList.remove("move-up");
      }
    });
    observer.observe(card);
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <h5>{title}</h5>
      <img src={icon1} alt='ikona'/>
      <p>{text}</p>
    </div>
  );
};

export default Card;
