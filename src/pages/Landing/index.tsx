import React from "react";
import {
  logoImg,
  landingImg,
  studyIcon,
  giveIcon,
  purpleHeartIcon,
} from "../../assets";
import "./styles.scss";

const Landing = () => {
  return (
    <div className="pg-landing">
      <div className="pg-landing__content container">
        <div className="pg-landing__logo">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="pg-landing__hero"
        />
        <div className="pg-landing__actions">
          <a href="#teste" className="pg-landing__study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="#teste" className="pg-landing__give">
            <img src={giveIcon} alt="Dar aulas " />
            Dar aulas
          </a>
        </div>
        <span className="pg-landing__total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
