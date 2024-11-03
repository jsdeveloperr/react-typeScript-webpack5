import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
