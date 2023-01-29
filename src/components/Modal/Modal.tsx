import React from "react";
import ReactDOM from "react-dom";

interface IModalProps {
  children: JSX.Element;
  modalId?: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  children,
  modalId,
}) => {

  
  return ReactDOM.createPortal(
    <div className="modal fade" id={modalId}>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
