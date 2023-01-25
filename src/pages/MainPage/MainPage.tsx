import React from 'react';
import AboutUs from '../../sections/AboutUs/AboutUs';
import Offer from '../../sections/Offer/Offer';
import Coaches from '../../sections/Coaches/Coaches';

const MainPage: React.FunctionComponent = () => {
  return (
    <>
      <AboutUs/>
      <Offer/>
      <Coaches/>
    </>
  );
};

export default MainPage;
