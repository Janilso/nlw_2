import React from "react";
import { whatsappIcon } from "../../assets";
import "./styles.scss";

interface ItemTeacher {
  urlFoto: string;
  nome?: string;
  disciplina?: string;
  descricao?: string;
  subdescricao?: string;
  preco?: string;
  whatsapp?: number;
}

const ItemTeacher: React.FC<ItemTeacher> = (props) => {
  const { urlFoto, nome, disciplina, descricao, subdescricao, preco } = props;
  return (
    <main className="comp-item-teacher">
      <article className="comp-item-teacher__item">
        <header>
          <img
            src={
              urlFoto ||
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
        <br />
        <br />
        <p>{subdescricao}</p>
        <footer>
          <p>
            Preço/Hora <strong>{preco}</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  );
};

export default ItemTeacher;
