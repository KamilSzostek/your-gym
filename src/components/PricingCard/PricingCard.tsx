import React from 'react';
import TextComponent from './subcomponents/TextComponent';
import { IPricing } from '../../utilities/pricing';
import './PricingCard.scss';

const PricingCard: React.FunctionComponent<IPricing> = ({ type, icon, periods }) => {
    const textComponents = periods.map(text => (
        <TextComponent
            key={Math.random()}
            period={text.period}
            price={text.price}
        />
    ))
    return (
        <div className='price-card'>
            <img src={icon} alt={type} />
            <h4>{type}</h4>
            {textComponents}
        </div>
    );
};

export default PricingCard;
