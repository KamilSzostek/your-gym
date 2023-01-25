import React, { RefObject } from 'react';
import { swipeHandler } from '../../utilities/swipeHandler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import './SwipeButtons.scss';

interface IButtonArrowProps {
    cardsRef: RefObject<HTMLDivElement>;
    cardClass: string;
}

const ButtonArrow: React.FunctionComponent<IButtonArrowProps> = ({ cardsRef, cardClass }) => {
    return (
        <>
            <button
                id='next'
                className='arrow-btn'
                onClick={(event) => swipeHandler(event, cardsRef, cardClass)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button
                id='prev'
                className='arrow-btn d-none'
                onClick={(event) => swipeHandler(event, cardsRef, cardClass)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </>
    );
};

export default ButtonArrow;
