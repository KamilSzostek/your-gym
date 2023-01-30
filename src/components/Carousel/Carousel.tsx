import React, { useId, useRef } from 'react';
import CoachCard from '../CoachCard/CoachCard';
import { ICoach } from '../../utilities/coaches';
import './Carousel.scss';

interface ICarouselProps {
    coachesArr: ICoach[];
}

const Carousel: React.FunctionComponent<ICarouselProps> = ({ coachesArr }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    let isDragStart = false, prevPageX: number, prevScollLeft: number;

    const dragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        isDragStart = true
        prevPageX = e.pageX;
        prevScollLeft = wrapperRef.current?.scrollLeft!;
    }
    const dragStop = (e: React.MouseEvent<HTMLDivElement>) => {
        const wrapper = wrapperRef.current!;
        wrapper.classList.remove('draging')
        isDragStart = false;
        prevPageX = e.pageX;
        prevScollLeft = wrapper.scrollLeft!;
    }
    const dragging = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragStart) {
            const wrapper = wrapperRef.current!;
            wrapper.classList.add('draging')
            let positionDiff = e.pageX - prevPageX;
            wrapper.style.transform = `translateX(${prevScollLeft - positionDiff})`;
        }
    }


    const pause = () => {
        const carousel = carouselRef.current;
        carousel?.classList.add('paused');
    }
    const play = () => {
        const carousel = carouselRef.current;
        carousel?.classList.remove('paused');
        isDragStart = false;
    }


    const coachesElement =
        [...coachesArr, ...coachesArr]?.map((coach, key) => (
            <CoachCard
                key={useId()}
                index={key + 1}
                id={coach.id}
                name={coach.name}
                img={coach.image}
                icon={coach.icon}
                type={coach.type}
                description={coach.description}
            />
        ))
    const dotElements =
        coachesArr?.map((coach, key) => {
            const dotClass = `dot${key + 1} dot${key + 1 + coachesArr.length}`
            return (
                <div key={useId()} style={{ minWidth: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', transition: '0.5s' }} id={(key + 1).toString()} className={dotClass} />)
        })

    return (
        <div className='wrapper'
            ref={wrapperRef}
            onMouseEnter={pause}
            onMouseLeave={play}
            onMouseDown={dragStart}
            onMouseUp={dragStop}
            onMouseMove={dragging}>
            <div
                className='carousel'
                ref={carouselRef}
            >
                {coachesElement}
            </div>
            <div className='dots'>
                {dotElements}
            </div>
        </div>
    );
};

export default Carousel;