import React, { FormEvent, ButtonHTMLAttributes } from "react";

import "./styles.scss";
import Loader from "../Loader";

type typesButton = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: typesButton;
  text: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  onClick?(e: FormEvent): void;
}

const Button: React.FC<ButtonProps> = ({
  typeButton = "secondary",
  text,
  onClick,
  icon,
  loading = false,
  disabled = false,
  ...res
}) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={`comp-button comp-button__${typeButton}`}
      {...res}
    >
      {icon && <img src={icon} alt="Whatsapp" />}
      {text}
      {loading && (
        <span className="comp-button__load">
          <Loader type="white" size="2rem" />
        </span>
      )}
    </button>
  );
};

export default Button;
