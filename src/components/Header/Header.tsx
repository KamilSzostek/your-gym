import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";
import HeaderText from "../HeaderText/HeaderText";
import logo from "../../assets/header/logo-color.png";
import "./Header.scss";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const logoRef = useRef<HTMLImageElement>(null);
  
  const location = useLocation();

  useEffect(() => {
    const logo = logoRef.current;
    if (location.pathname !== "/coaches" && logo?.classList.contains("margin"))
      logo.classList.remove("margin");
  }, [location.pathname]);

  return (
    <header>
      <img src={logo} alt="Logo siłowni power gym" ref={logoRef}/>
      <Navigation />
      <HeaderText/>
    </header>
  );
};

export default Header;
