import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import P404 from "../../assets/404/404.png";
import "./Page404.scss";

interface IPage404Props {}

const Page404: React.FunctionComponent<IPage404Props> = (props) => {
  return (
    <section className="page-404">
      <p>oops..</p>
      <img src={P404} alt="" />
      <p>zgubiłeś się</p>
        <Link className="link" to="/">wróć na start</Link>
    </section>
  );
};

export default Page404;
