import React, { InputHTMLAttributes } from "react";
import "./styles.scss";

type RegisterTypeInput =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  label: string;
  error?: boolean;
  errorText?: string;
  register?: RegisterTypeInput;
}

const Input: React.FC<IInputProps> = ({
  name,
  label,
  error = false,
  errorText = "Preencha corretamente este campo",
  required,
  register,
  ...rest
}) => {
  return (
    <>
      <div className={`comp-input ${error && "error"}`}>
        <label htmlFor={name}>{label}</label>
        <input ref={register} id={name} name={name} type="text" {...rest} />
      </div>
      {error && <div className="comp-input__error">{errorText}</div>}
    </>
  );
};

export default Input;
