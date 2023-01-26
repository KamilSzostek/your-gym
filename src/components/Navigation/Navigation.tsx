import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import Hamburger from "hamburger-react";
import "./Navigation.scss";

interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const [isOpen, setOpen] = useState(false);

  const navListRef = useRef<HTMLUListElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const startRef = useRef<HTMLSpanElement>(null);
  const aboutusRef = useRef<HTMLSpanElement>(null);
  const offerRef = useRef<HTMLSpanElement>(null);
  const contactRef = useRef<HTMLSpanElement>(null);
  const coachesRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        navListRef.current?.classList.remove("show-list");
        burgerRef.current?.classList.remove("move-burger");
        setOpen(false);
      }
    });
    observer.observe(navListRef.current!);
  }, []);

  const goTo = (section: HTMLElement, className: string) => {
    setTimeout(() => {
      section?.scrollIntoView({ behavior: "smooth" });
      navListRef.current?.classList.toggle("show-list");
      burgerRef.current?.classList.toggle("move-burger");
    }, 500);
    setTimeout(() => lineRef.current?.classList.remove(className), 1000);
  };

  const burgerHandler = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!isOpen);
    const aboutUs = aboutusRef.current;
    const offer = offerRef.current;
    const contact = contactRef.current;
    const line = lineRef.current;
    const coaches = coachesRef.current;

    if (location.pathname === "/coaches" && window.innerWidth < 992)
      document.querySelector("html")?.classList.toggle("no-scroll");

    switch (event.target) {
      case aboutUs:
        line?.classList.add("transformx-100");
        goTo(document.querySelector("#aboutus")!, "transformx-100");
        return;
      case offer:
        line?.classList.add("transformx-200");
        goTo(document.querySelector("#offer")!, "transformx-200");
        return;
      case contact:
        line?.classList.add("transformx-300");
        goTo(document.querySelector("#contact")!, "transformx-300");
        return;
      case coaches:
        line?.classList.add("transformx-300");
        goTo(document.querySelector("#coaches")!, "transformx-300");
        return;
    }
    navListRef.current?.classList.toggle("show-list");
    burgerRef.current?.classList.toggle("move-burger");
  };

  const startNavElement = (
    <>
      <li>
        <span ref={startRef} className="active" onClick={burgerHandler}>
          Start
        </span>
        <div className="line" ref={lineRef} />
      </li>
      <li>
        <span ref={aboutusRef} onClick={burgerHandler}>
          O nas
        </span>
      </li>
      <li>
        <span ref={offerRef} onClick={burgerHandler}>
          Oferta
        </span>
      </li>
      <li>
          <span ref={coachesRef} onClick={burgerHandler}>
            Trenerzy
          </span>
      </li>
      <li>
        <span ref={contactRef} onClick={burgerHandler}>
          Kontakt
        </span>
      </li>
    </>
  );

  return (
    <nav>
      <div className="nav">
        <button className="nav__burger" ref={burgerRef} onClick={burgerHandler}>
          <Hamburger toggled={isOpen} duration={0.5} size={48} rounded />
        </button>
        <ul ref={navListRef}>
            {startNavElement}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
