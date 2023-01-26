import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface IContactFormProps {
}
interface IInputElement {
    classList: DOMTokenList;
}
const ContactForm: React.FunctionComponent<IContactFormProps> = (props) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const nameLabelRef = useRef<HTMLLabelElement>(null);
    const messageLabelRef = useRef<HTMLLabelElement>(null);

    useEffect(() => {
        if (name === "") nameLabelRef.current?.classList.remove("show-label");
    }, [name]);

    useEffect(() => {
        if (message === "") messageLabelRef.current?.classList.remove("show-label");
    }, [message]);

    const addClass = (className: string, element: IInputElement) => {
        if (!element.classList.contains(className))
            element.classList.add(className);
    };

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        addClass("show-label", nameLabelRef.current!);
        setName(event.target.value);
    };

    const messageChangeHandler = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        addClass("show-label", messageLabelRef.current!);
        setMessage(event.target.value);
    };

    const messageHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <form>
            <h5>Napisz do nas:</h5>
            <label ref={nameLabelRef}>Imię i nazwisko</label>
            <input
                type="text"
                maxLength={32}
                placeholder="Imię i nazwisko"
                value={name}
                onChange={nameChangeHandler}
            />
            <label ref={messageLabelRef}>Wiadomość</label>
            <textarea
                cols={8}
                rows={8}
                maxLength={150}
                placeholder="Wiadomość..."
                value={message}
                onChange={messageChangeHandler}
            ></textarea>
            <button type="submit" onClick={messageHandler}>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Wyślij</span>
            </button>
        </form>
    );
};

export default ContactForm;
