import React from "react";
import { whatsappIcon } from "../../assets";
import "./styles.scss";
import { createConnections } from "../../services/serviceConnections";

interface ItemTeacher {
  avatar: string;
  nome?: string;
  disciplina?: string;
  descricao?: string;
  preco?: number;
  whatsapp?: number;
  key?: number;
  id: number;
}

const ItemTeacher: React.FC<ItemTeacher> = ({
  avatar,
  nome,
  disciplina,
  descricao,
  preco,
  whatsapp,
  key,
  id,
}) => {
  function createNewConnection() {
    createConnections({ user_id: id });
  }

  const size = window.innerWidth;

  return (
    <main key={key} className="comp-item-teacher">
      <article className="comp-item-teacher__item">
        <header>
          <img
            src={
              avatar ||
              "https://www.bauducco.com.br/wp-content/uploads/2017/09/default-placeholder-1-2.png"
            }
            alt={nome}
          />
          <div>
            <strong>{nome}</strong>
            <span>{disciplina}</span>
          </div>
        </header>
        <p> {descricao} </p>
        <footer>
          <p>
            Preço/Hora <strong>{preco}</strong>
          </p>
          <a
            onClick={createNewConnection}
            href={`https://${
              size > 700 ? "web" : "api"
            }.whatsapp.com/send?phone=55${whatsapp}`}
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </a>
        </footer>
      </article>
    </main>
  );
};

export default ItemTeacher;
