import React, { useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Types } from '../../utilities/types';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BoxingBg from '../../assets/reservation/boxing-large.jpg';
import BodyBg from '../../assets/reservation/weight-large.jpg';
import ZumbaBg from '../../assets/reservation/zumba-large.jpg';
import JogaBg from '../../assets/reservation/joga-room-large.jpeg'
import TypeInfo from './subcomponents/TypeInfo/TypeInfo';
import Coaches from '../../sections/Coaches/Coaches';
import ReservationTable from './subcomponents/ReservationTable/ReservationTable';
import { coaches } from "../../utilities/coaches";
import './Reservation.scss';


const days = ["", "Pn", "Wt", "Śr", "Czw", "Pt"];
const hours = [
    ["17:00-18:00", "Rezerwuj", "", "", "Rezerwuj", ""],
    ["18:00-19:00", "", "Rezerwuj", "", "Rezerwuj", ""],
    ["19:00-20:00", "", "", "", "Rezerwuj", "Rezerwuj"],
];


const App: React.FunctionComponent = () => {
    const [idState, setIdState] = useState(0);

    const sectionRef = useRef<HTMLElement>(null);
    const location = useLocation();
    const { id, name, img, icon, type } = location.state;
    
    let coachesFiltered = coaches.filter(coach => coach.id !== id);

    useLayoutEffect(() => {
        setIdState(id)
        coachesFiltered = coaches.filter(coach => coach.id !== idState);
    }, [id])

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        const section = sectionRef.current!;
        switch (type) {
            case Types.BODYBUILDING:
                section.style.backgroundImage = `url('${BodyBg}')`;
                break;
            case Types.BOXING:
                section.style.backgroundImage = `url('${BoxingBg}')`;
                break;
            case Types.ZUMBA:
                section.style.backgroundImage = `url('${ZumbaBg}')`;
                break;
            case Types.JOGA:
                section.style.backgroundImage = `url('${JogaBg}')`;
                break;
        }
    })
    return (
        <div className='reservation-page'>
            <section className='reservation' ref={sectionRef}>
                <SectionTitle title='zarezerwuj trening' />
                <TypeInfo type={type} icon={icon} />
                <div className='reservation__image'>
                    <h4>{name}</h4>
                    <img src={img} alt={name} />
                </div>
                <ReservationTable
                    id={id}
                    name={name}
                    icon={icon}
                    thead={days}
                    tbody={hours}
                />
            </section>
            <Coaches coachesFiltered={coachesFiltered}/>
        </div>
    );
};

export default App;
