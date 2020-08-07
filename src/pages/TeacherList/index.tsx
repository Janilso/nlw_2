import React, { useState, FormEvent } from "react";
import Header from "../../components/Header";
import "./styles.scss";
import ItemTeacher from "../../components/ItemTeacher";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { getClasses, Teacher } from "../../services/serviceClasses";

const TeacherList = () => {
  const [subject, setSubject] = useState("");
  const [weekday, setWeekday] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  function searchTeachers(e: FormEvent) {
    e.preventDefault();
    getClasses(subject, Number(weekday), time).then((response) => {
      setTeachers(response);
    });
    return console.log({ subject, weekday, time });
  }

  return (
    <div className="pg-teacher-list container">
      <Header title="Estes são os proffs disponíveis.">
        <form className="pg-teacher-list__form" onSubmit={searchTeachers}>
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={weekday}
            onChange={(e) => setWeekday(e.target.value)}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </Header>
      <div className="pg-teacher-list__listagem">
        {teachers.length
          ? teachers.map(
              ({ id, avatar, name, bio, cost, subject, whatsapp }, index) => {
                return (
                  <div key={index}>
                    <ItemTeacher
                      id={id}
                      avatar={avatar}
                      nome={name}
                      disciplina={subject}
                      descricao={bio}
                      preco={cost}
                      whatsapp={whatsapp}
                    />
                  </div>
                );
              }
            )
          : null}
      </div>
    </div>
  );
};

export default TeacherList;
