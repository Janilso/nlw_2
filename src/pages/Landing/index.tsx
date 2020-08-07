import React, { useState, useEffect } from "react";
import {
  logoImg,
  landingImg,
  studyIcon,
  giveIcon,
  purpleHeartIcon,
} from "../../assets";
import "./styles.scss";
import { Link } from "react-router-dom";
import { getConnections } from "../../services/serviceConnections";

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    getConnections().then(({ total }) => setTotalConnections(total));
  }, []);

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
          <Link to="/study" className="pg-landing__study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="pg-landing__give">
            <img src={giveIcon} alt="Dar aulas " />
            Dar aulas
          </Link>
        </div>
        <span className="pg-landing__total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
