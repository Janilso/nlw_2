import React, { useState, FormEvent, useEffect } from "react";
import Header from "../../components/Header";
import "./styles.scss";
import ItemTeacher from "../../components/ItemTeacher";
import Input from "../../components/Input";
import Select from "../../components/Select";
import {
  getClasses,
  getClassesAll,
  Teacher,
} from "../../services/serviceClasses";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

const TeacherList = () => {
  const [subject, setSubject] = useState("");
  const [weekday, setWeekday] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loadingTeachers, setLoadingTeachers] = useState(false);

  useEffect(() => {
    fetchGetAllTeachers();
  }, []);

  /*
   * Functions
   */

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    setLoadingTeachers(true);
    getClasses(subject, Number(weekday), time)
      .then((response) => {
        setTeachers(response);
        setLoadingTeachers(false);
      })
      .catch(() => {
        setTeachers([]);
        setLoadingTeachers(false);
      });
  }

  function fetchGetAllTeachers() {
    setLoadingTeachers(true);
    getClassesAll()
      .then((resultado) => {
        setTeachers(resultado);
        setLoadingTeachers(false);
      })
      .catch(() => setLoadingTeachers(false));
  }

  /*
   * Renders
   */
  function renderEmptyTeachers() {
    return (
      <div className="pg-teacher-list__empty">
        Nenhum professor encontrado com sua pesquisa.
      </div>
    );
  }

  function renderListTeachers() {
    return teachers.length
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
      : renderEmptyTeachers();
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
          <Button
            text="Buscar"
            type="submit"
            typeButton="secondary"
            loading={loadingTeachers}
          />
        </form>
      </Header>
      <div
        className={`pg-teacher-list__listagem ${
          loadingTeachers ? "pg-teacher-list__loading" : ""
        }`}
      >
        {loadingTeachers ? (
          <Loader type="secondary" size="3.5rem" />
        ) : (
          renderListTeachers()
        )}
      </div>
    </div>
  );
};

export default TeacherList;
