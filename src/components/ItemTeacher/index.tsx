import React from "react";
import { whatsappIcon } from "../../assets";
import "./styles.scss";
import { createConnections } from "../../services/serviceConnections";
import Button from "../Button";
import { formatToBRL } from "../../utils/formats";

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
    const size = window.innerWidth;
    createConnections({ user_id: id });
    window.open(
      `https://${
        size > 700 ? "web" : "api"
      }.whatsapp.com/send?phone=55${whatsapp}`,
      "_blank"
    );
  }

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
            Preço/Hora <strong>{formatToBRL(preco)}</strong>
          </p>
          <Button
            text="Entrar em contato"
            typeButton="secondary"
            onClick={createNewConnection}
            icon={whatsappIcon}
          />
        </footer>
      </article>
    </main>
  );
};

export default ItemTeacher;
