import React from "react";
import { backIcon, logoImg } from "../../assets";
import { Link } from "react-router-dom";
import "./styles.scss";

interface HeaderProps {
  title: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ title, children, description }) => {
  return (
    <header className="comp-header">
      <div className="comp-header__actions-top">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="comp-header__title">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
};

export default Header;
