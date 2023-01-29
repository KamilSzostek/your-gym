import React from 'react';

interface ITbodyElementProps {
    id: string;
    row: string[];
    setDay: (header: string) => void;
    setTime: (time: string) => void;
}
const TbodyElement: React.FunctionComponent<ITbodyElementProps> = ({ id, row, setDay, setTime }) => {
    let index = 0;
    const modalId = `#modal${id}`;
    const clickHandler = (e: React.MouseEvent<HTMLTableCellElement>) => {
        const header = e.currentTarget.headers;
        const timeInterval = e.currentTarget.parentElement?.querySelector('td')?.innerText!;
        if (setDay) setDay(header);
        if (setTime) setTime(timeInterval);
    };
    return (
        <>
            <tr>
                {row.map((cell) => {
                    const modalTriggerBtn = (
                        <td
                            headers={index.toString()}
                            key={row.indexOf(cell) + Math.random()}
                            data-bs-toggle="modal"
                            data-bs-target={modalId}
                            onClick={clickHandler}
                        >
                            {cell}
                        </td>
                    );
                    const regularCell = (
                        <td key={row.indexOf(cell) + Math.random()}>{cell}</td>
                    );
                   index++;


                    return cell === "Rezerwuj" ? modalTriggerBtn : regularCell;
                })}
            </tr>
        </>
    );
};

export default TbodyElement;
