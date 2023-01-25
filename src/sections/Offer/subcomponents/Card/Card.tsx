import React from 'react';
import './Card.scss';

interface ICardProps {
    scale?: string;
    title: string;
    comp: JSX.Element;
}

const Card: React.FunctionComponent<ICardProps> = ({ scale, title, comp }) => {
    const classes = scale ? `offer__card ${scale}` : 'offer__card';
    return (
        <div className={classes}>
            <div className='offer__card__content'>
                <h3>{title}</h3>
                <>{comp}</>
            </div>
        </div>
    );
};

export default Card;
