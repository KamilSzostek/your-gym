import React from "react";
import './Table.scss';

interface ITableProps {
  thead: string[];
  tbody: string[][];
}

const Table: React.FunctionComponent<ITableProps> = ({ thead, tbody }) => {
  const theadElements = thead.map((cell) => (
    <td key={thead.indexOf(cell)}>{cell}</td>
  ));

  const tbodyElements = tbody.map((row) => (
    <tr key={tbody.indexOf(row)}>
      {row.map((cell) => (
        <td key={row.indexOf(cell)+Math.random()}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table className="offer__table">
      <thead>
        <tr>{theadElements}</tr>
      </thead>
      <tbody>{tbodyElements}</tbody>
    </table>
  );
};

export default Table;
