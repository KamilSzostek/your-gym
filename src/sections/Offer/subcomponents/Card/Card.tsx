import React from 'react';
import './Card.scss';

interface ICardProps {
    scale?: string;
    title: string;
    comp: JSX.Element;
    active?: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ scale, title, comp, active }) => {
    const classes = scale ? `offer__card ${scale} ${active}` : `offer__card ${active}`;
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
