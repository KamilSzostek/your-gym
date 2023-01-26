import React from "react";
import './DataContainer.scss';

interface IDataContainerProps {
  title: string;
  firstLine: string;
  secondLine: string;
  thirdLine?: string;
}

const DataContainer: React.FunctionComponent<IDataContainerProps> = ({
  title,
  firstLine,
  secondLine,
  thirdLine,
}) => {
  return (
    <div className='data-container'>
      <h5>{title}</h5>
      <p>{firstLine}</p>
      <p>{secondLine}</p>
      {thirdLine && <p>{thirdLine}</p>}
    </div>
  );
};

export default DataContainer;
