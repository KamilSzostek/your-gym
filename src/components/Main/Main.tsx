import React from "react";
import MainPage from '../../pages/MainPage/MainPage';
import Reservation from '../../pages/Reservation/Reservation';
import Page404 from "../../pages/Page404/Page404";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";


interface IMainProps { }

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservation/:id" element={<Reservation/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Main;
