import React from "react";
import { backIcon, logoImg } from "../../assets";
import { Link } from "react-router-dom";
import "./styles.scss";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title, children } = props;
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
        {children}
      </div>
    </header>
  );
};

export default Header;
