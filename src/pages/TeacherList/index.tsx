import React from "react";
import Header from "../../components/Header";
import "./styles.scss";
import ItemTeacher from "../../components/ItemTeacher";

const TeacherList = () => {
  return (
    <div className="pg-teacher-list container">
      <Header title="Estes são os proffs disponíveis.">
        <form className="pg-teacher-list__form">
          <div className="pg-teacher-list__input">
            <label htmlFor="subject">Matéria</label>
            <input id="subject" type="text" />
          </div>
          <div className="pg-teacher-list__input">
            <label htmlFor="week_day">Dia da semana</label>
            <input id="week_day" type="text" />
          </div>
          <div className="pg-teacher-list__input">
            <label htmlFor="time">Hora</label>
            <input id="time" type="text" />
          </div>
        </form>
      </Header>
      <div className="pg-teacher-list__listagem">
        <ItemTeacher
          urlFoto="https://avatars1.githubusercontent.com/u/40339129?s=460&v=4"
          nome="Janilso Rodrigues"
          disciplina="Química"
          descricao="Entusiasta das melhores tecnologias de química avançada."
          subdescricao="Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões."
          preco="R$ 20,00"
        />
        <ItemTeacher
          urlFoto="https://avatars1.githubusercontent.com/u/40339129?s=460&v=4"
          nome="Janilso Rodrigues"
          disciplina="Química"
          descricao="Entusiasta das melhores tecnologias de química avançada."
          subdescricao="Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões."
          preco="R$ 20,00"
        />
        <ItemTeacher
          urlFoto="https://avatars1.githubusercontent.com/u/40339129?s=460&v=4"
          nome="Janilso Rodrigues"
          disciplina="Química"
          descricao="Entusiasta das melhores tecnologias de química avançada."
          subdescricao="Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões."
          preco="R$ 20,00"
        />
      </div>
    </div>
  );
};

export default TeacherList;
