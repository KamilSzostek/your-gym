import React, { useId, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../../../components/Button/Button";
import FormModal from "../../../../components/FormModal/FormModal";
import TbodyElement from "./subcomponents/TbodyElement";
import { createDatesArray } from "../../../../utilities/dateTimeSetters";
import { nextWorkWeekDate } from "../../../../utilities/nextWeekDate";
import "./ReservationTable.scss";

interface IReservationTableProps {
    id: string;
    name: string;
    icon: string;
    thead: string[];
    tbody: string[][];
}

const ReservationTable: React.FunctionComponent<IReservationTableProps> = ({ id, name, icon, thead, tbody }) => {
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    const setDay = (header: string) => {
        const dates = createDatesArray();
        setDate(dates[+header - 1]);
    }

    const setTime = (time: string) => {
        setHour(time)
    }

    const navigate = useNavigate();
    const bodyRef = useRef<HTMLTableSectionElement>(null);

    useLayoutEffect(() => {
        const cells = bodyRef.current?.querySelectorAll('td')!;
        for (const cell of cells) {
            if (cell.innerText === '')
                cell.style.transform = 'scale(0)';
        }
    })

    const theadElements = thead.map((cell) => (
        <th key={thead.indexOf(cell)}>
            {cell}
        </th>
    ));

    const tbodyElements = tbody.map((row) => (
        <TbodyElement key={useId()} id={id} row={row} setDay={setDay} setTime={setTime} />
    ))

    return (
        <div className="reservation__table">
            <h4 className="reservation__table__title">Dostępne terminy<br /> <span> {nextWorkWeekDate()}</span></h4>
            <div className="reservation__table-container">
                <table>
                    <thead>
                        <tr>{theadElements}</tr>
                    </thead>
                    <tbody ref={bodyRef}>{tbodyElements}</tbody>
                </table>
            </div>
            <Button text="" click={() => navigate(-1)} />
            <FormModal coachName={name} coachNumber={id} icon={icon} date={date} time={hour} />
        </div>
    );
}

export default ReservationTable;
