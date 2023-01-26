import React from "react";
import Logo from "../../assets/footer/logo.png";
import Facebook from "../../assets/footer/facebook.png";
import Twitter from "../../assets/footer/twitter.png";
import DataContainer from "../../components/DataContainer/DataContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <div
          className="footer__header__arrow"
          onClick={() => window.scrollTo(0, 0)}
        >
          <FontAwesomeIcon icon={faChevronUp} />
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__content__brand">
          <img
            className="footer__content__brand__logo"
            src={Logo}
            alt="Power Gym log"
          />
          <p className="footer__content__brand__copy">
            {new Date().getFullYear()} &copy;
          </p>
        </div>
        <div className="footer__content__containers">
          <DataContainer
            title="Regulaminy"
            firstLine="Regulamin szatnii"
            secondLine="Regulamin korzystania z sauny"
            thirdLine="Regulamin karty członkowskiej"
          />
          <DataContainer
            title="Informacje"
            firstLine="Informacja dot. zachowania bezpieczeństwa na schodach"
            secondLine="Informacja dot. zachowania bezpieczeństwa na schodach"
          />
        </div>
        <div className="footer__content__social-media">
          <a href="https://www.facebook.com">
            <img className="facebook" src={Facebook} alt="facebook logo" />
          </a>
          <a href="https://www.twitter.com">
            <img src={Twitter} alt="twitter logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
