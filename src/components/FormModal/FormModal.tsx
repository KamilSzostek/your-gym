import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Pen from '../../assets/reservation/signature.png';
import './FormModal.scss';

interface IFormModalProps {
  coachName: string;
  coachNumber: string;
  icon: string;
  date: string;
  time: string;
}

const FormModal: React.FunctionComponent<IFormModalProps> = ({
  coachName,
  coachNumber,
  icon,
  date,
  time
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const surnameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSurname(e.target.value);
  const phoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const modalId = `modal${coachNumber?.toString()}`;

  return (
    <Modal modalId={modalId}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border rounded-5">
          <div className="modal-header">
            <img className="w-25 me-5 mb-5" src={icon} alt="bodybuilding" />
            <h1 className="text-center">
              <span className="me-3">{coachName}</span>
            </h1>
            <h2 className="modal-title fs-3" id="exampleModalLabel">
              Trening siłowy: <span className="fw-bold">{date}</span> <br />W
              godzinach: <span className="fw-bold">{time}</span>
            </h2>
          </div>
          <div className="modal-body">
            <form className="w-75 mx-auto fs-4" onSubmit={submitHandler}>
              <p>Aby potwierdzić rezerwacje wypełnij poniższy formularz:</p>
              <div className="mb-3">
                <label className="col-form-label">Imię:</label>
                <input
                  type="text"
                  className="form-control fs-3"
                  value={name}
                  required
                  onChange={nameHandler}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Nazwisko:</label>
                <input
                  type="text"
                  className="form-control fs-3"
                  value={surname}
                  required
                  onChange={surnameHandler}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Numer telefonu:</label>
                <input
                  type="text"
                  minLength={9}
                  maxLength={9}
                  className="form-control fs-3"
                  value={phoneNumber}
                  required
                  onChange={phoneNumberHandler}
                />
              </div>
              <div className="w-50 ms-auto">
                <button
                  type="submit"
                  className="btn btn-outline-secondary w-100 mb-3 border-2 rounded-4 fs-2"
                  onClick={clickHandler}
                >
                  <img className="w-25" src={Pen} alt="pen" />
                  Rezerwuj
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <span className="fs-5">
              * Koszt treningu wynosi 100 złotych za godzinnę.
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FormModal;
