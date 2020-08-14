import React, { SelectHTMLAttributes } from "react";
import "./styles.scss";

type RegisterTypeSelect =
  | string
  | ((instance: HTMLSelectElement | null) => void)
  | React.RefObject<HTMLSelectElement>
  | null
  | undefined;

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  register?: RegisterTypeSelect;
  error?: boolean;
  errorText?: string;
  options: Array<{
    key?: string;
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  error = false,
  errorText = "Preencha corretamente este campo",
  options,
  register,
  ...rest
}) => {
  return (
    <>
      <div className={`comp-select ${error && "error"}`}>
        <label htmlFor={name}>{label}</label>
        <select ref={register} value="" id={name} name={name} {...rest}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="comp-select__error">{errorText}</div>}
    </>
  );
};

export default Select;
