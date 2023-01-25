import React from "react";
import ReactDOM from "react-dom";

interface IModalProps {
  children: JSX.Element;
  coachNumber?: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  children,
  coachNumber,
}) => {

  return ReactDOM.createPortal(
    <div className="modal fade" id={coachNumber?.toString()}>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
