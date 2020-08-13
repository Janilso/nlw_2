import React, { useState } from "react";

import { warningIcon } from "../../assets";
import { createClass } from "../../services/serviceClasses";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import Button from "../../components/Button";
import "./styles.scss";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  avatar: string;
  whatsapp: number;
  bio: string;
  subject: string;
  cost: number;
  scheduleItems: Array<{
    week_day: string;
    from: string;
    to: string;
  }>;
}

const TeacherForm = () => {
  const [subject, setSubject] = useState("");
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);
  const [loadingClass, setLoadingClass] = useState(false);
  const { handleSubmit, errors, register } = useForm<IFormInput>();

  // Functions
  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if (index === position)
        return {
          ...scheduleItem,
          [field]: field === "week_day" ? Number(value) : value,
        };
      return scheduleItem;
    });
    setScheduleItems(newArray);
  }

  function fetchCreateClass(objectSend: Object) {
    createClass(objectSend)
      .then(() => {
        setLoadingClass(false);
        toast.success("Cadastro realizado com sucesso");
      })
      .catch(() => setLoadingClass(false));
  }

  const onSubmit = (data: IFormInput) => {
    const { name, avatar, whatsapp, bio, subject, cost } = data;
    const { from, to } = scheduleItems[scheduleItems.length - 1];
    if (from === "" || to === "") {
      toast.error("Preencha corretamente os horários");
    } else {
      setLoadingClass(true);
      const objectSend = {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      };
      fetchCreateClass(objectSend);
    }
  };

  return (
    <div className="teacher-form container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main className="teacher-form__formulario">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              register={register({
                required: "Peencha este campo",
              })}
              name="name"
              label="Nome completo*"
              error={Boolean(errors.name)}
            />
            <Input
              register={register}
              name="avatar"
              label="Avatar"
              error={Boolean(errors.avatar)}
            />
            <Input
              register={register({ required: "Peencha este campo" })}
              name="whatsapp"
              label="Whatsapp *"
              error={Boolean(errors.whatsapp)}
            />
            <Textarea
              register={register({ required: "Peencha este campo" })}
              name="bio"
              label="Biografia *"
              error={Boolean(errors.bio)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre aula</legend>
            <Select
              register={register({ required: "Peencha este campo" })}
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
              error={Boolean(errors.subject)}
            />
            <Input
              register={register({
                required: "Peencha este campo",
              })}
              name="cost"
              label="Custo da sua aula por hora"
              error={Boolean(errors.cost)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((item, index) => {
              return (
                <div key={index} className="teacher-form__schedule-item">
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
                    value={item.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={item.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={item.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha os dados
            </p>
            <Button
              text="Salvar cadastro"
              type="submit"
              typeButton="secondary"
              loading={loadingClass}
            />
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
