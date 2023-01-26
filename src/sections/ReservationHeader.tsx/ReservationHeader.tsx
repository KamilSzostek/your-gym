import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/header/logo-color.png'
import './ReservationHeader.scss';

const ReservationHeader: React.FunctionComponent = (props) => {
    return (
        <section className='reservation-header'>
            <img src={logo} alt='logo'/>
            <Link to='/'>start</Link>
        </section>
    );
};

export default ReservationHeader;
