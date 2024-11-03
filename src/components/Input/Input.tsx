import React from 'react';
import { useController, Control } from 'react-hook-form';
import './Input.scss';

type InputProps = {
  name: string;
  control: Control<any>;
  placeholder: string;
  type?: string;
}

const Input= ({ name, control, placeholder, type = 'text' }: InputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="inputContainer">
      <input {...field} placeholder={placeholder} type={type} className="inputField" />
      {error && <p className="errorText">{error.message}</p>}
    </div>
  );
};

export default Input;
