import React from "react";

interface IDataContainerProps {
  classes: string;
  title: string;
  firstLine: string;
  secondLine: string;
  thirdLine?: string;
}

const DataContainer: React.FunctionComponent<IDataContainerProps> = ({
  classes,
  title,
  firstLine,
  secondLine,
  thirdLine,
}) => {
  return (
    <div className={classes}>
      <h5>{title}</h5>
      <p>{firstLine}</p>
      <p>{secondLine}</p>
      {thirdLine && <p>{thirdLine}</p>}
    </div>
  );
};

export default DataContainer;
