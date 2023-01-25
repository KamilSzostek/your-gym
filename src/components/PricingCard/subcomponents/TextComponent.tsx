import React from 'react';
import { IPeriod } from '../../../utilities/pricing';

const TextComponent: React.FunctionComponent<IPeriod> = ({ period, price }) => {
    return (
        <div className='price-card__text'>
            <h5>{price}</h5>
            <span>PLN/msc</span>
            <span>z umową na <span>{period}</span></span>
        </div>
    );
};

export default TextComponent;
