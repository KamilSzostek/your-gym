import React from "react";
import { Routes, Route} from "react-router";
import MainHeader from "../../sections/MainHeader/MainHeader";
import ReservationHeader from "../../sections/ReservationHeader.tsx/ReservationHeader";
import './Header.scss';

const Header: React.FunctionComponent = () => {

  return (
    <header>
      <Routes>
        <Route path="/" element={<MainHeader />} />
        <Route path="/reservation/:id" element={<ReservationHeader />} />
      </Routes>
    </header>

  );
};

export default Header;
