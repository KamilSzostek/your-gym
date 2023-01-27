import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HeaderText from '../../components/HeaderText/HeaderText';
import logo from '../../assets/header/logo-color.png';
import './MainHeader.scss';

const MainHeader: React.FunctionComponent = () => {
    return (
        <section className='main-header'>
            <img src={logo} alt="Logo siłowni power gym" />
            <Navigation />
            <HeaderText />
            <div className='bg-images'>
                <div className='bg-image' />
                <div className='bg-image' />
                <div className='bg-image' />
                <div className='bg-image' />
                <div className='bg-image' />
            </div>
        </section>
    );
};

export default MainHeader;
