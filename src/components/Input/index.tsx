import React, { InputHTMLAttributes } from "react";
import "./styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="comp-input">
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" {...rest} />
    </div>
  );
};

export default Input;
