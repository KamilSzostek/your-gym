import React from 'react';
import AboutUs from '../../sections/AboutUs/AboutUs';
import Offer from '../../sections/Offer/Offer';
import Coaches from '../../sections/Coaches/Coaches';
import { coaches } from '../../utilities/coaches';
import Contact from '../../sections/Contact/Contact';

const MainPage: React.FunctionComponent = () => {
  return (
    <>
      <AboutUs/>
      <Offer/>
      <Coaches/>
      <Contact/>
    </>
  );
};

export default MainPage;
