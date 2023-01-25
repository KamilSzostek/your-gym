import React from "react";
import './HeaderText.scss';

const HeaderText: React.FunctionComponent= () => {
  return (
    <div className="text">
      <span className="text__first">odkryj</span>
      <span className="text__second">
        <span>swoją</span>
        <span>swoje</span>
      </span>
      <span className="text__changer">
        <span>moc</span>
        <span>szybkość</span>
        <span>siłe</span>
        <span>zwinność</span>
        <span>miejsce</span>
      </span>
    </div>
  );
};

export default HeaderText;