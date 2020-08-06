import React from "react";
import Header from "../../components/Header";
import "./styles.scss";
import ItemTeacher from "../../components/ItemTeacher";
import Input from "../../components/Input";
import Select from "../../components/Select";

const TeacherList = () => {
  return (
    <div className="pg-teacher-list container">
      <Header title="Estes são os proffs disponíveis.">
        <form className="pg-teacher-list__form">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação física", label: "Educação física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input name="time" label="Hora" type="time" />
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
