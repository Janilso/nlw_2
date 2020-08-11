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
  register?: RegisterTypeTextarea;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  register,
  ...rest
}) => {
  return (
    <div className="comp-textarea">
      <label htmlFor={name}>{label}</label>
      <textarea ref={register} id={name} name={name} {...rest} />
    </div>
  );
};

export default Textarea;
