import React from 'react';
import './Button.scss'

interface IButtonProps {
    text: string;
    click: () => void;
}

const Button: React.FunctionComponent<IButtonProps> = ({text, click}) => {
  return (
    <button className='basic-btn' onClick={click}>{text}</button>
  );
};

export default Button;
