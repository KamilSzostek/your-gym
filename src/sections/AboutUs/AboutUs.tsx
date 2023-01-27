import React, { useId, useLayoutEffect, useState, useRef } from "react";
import Article from "../../components/Article/Article";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import Card from "./subcomponents/Card";
import { cards, intro } from "../../utilities/aboutUsData";
import { typeText } from '../../utilities/AutoTypingFunction';
import "./AboutUs.scss";

const timeouts: number[] = [];

const AboutUs: React.FunctionComponent = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const textHandler = (prevState: string, letter: string) =>
    setText(prevState + letter);

  const introRef = useRef(null);

  useLayoutEffect(() => {
    const section = introRef.current!;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(section);
  });

  useLayoutEffect(() => {
    setText('');
  }, [intro])

  useLayoutEffect(() => {
    if (isVisible) {
      if (timeouts.length > 0) {
        for (const timeout of timeouts) {
          clearTimeout(timeout);
        }
      }
      const timeout = setTimeout(() => typeText(intro, text, textHandler), 25);
      timeouts.push(timeout);
    }

  }, [isVisible, text])

  const cardElements = cards.map(card => (
    <Card
      key={useId()}
      title={card.title}
      icon1={card.icon}
      text={card.text}
    />
  ))
  return (
    <section id="aboutus" className="aboutus">
      <div className="aboutus__intro" ref={introRef}>
        <SectionTitle title="poznaj nas lepiej" />
        <Article text={text} />
      </div>
      <PhotosGrid />
      <div className="aboutus__cards">
        {cardElements}
      </div>
    </section>
  );
};

export default AboutUs;
