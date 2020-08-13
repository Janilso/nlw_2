import React, { TextareaHTMLAttributes } from "react";
import "./styles.scss";

type RegisterTypeTextarea =
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined;
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value?: string;
  label: string;
  error?: boolean;
  errorText?: string;
  register?: RegisterTypeTextarea;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  error = false,
  errorText = "Preencha corretamente este campo",
  register,
  ...rest
}) => {
  return (
    <>
      <div className={`comp-textarea ${error && "error"}`}>
        <label htmlFor={name}>{label}</label>
        <textarea ref={register} id={name} name={name} {...rest} />
      </div>
      {error && <div className="comp-textarea__error">{errorText}</div>}
    </>
  );
};

export default Textarea;
