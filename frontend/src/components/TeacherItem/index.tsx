import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEIc9peKC8w4w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=u6A26dD2sYJqQoXwHGvLpDaZw3zxwhnCOVAFtVAI0QU"
          alt="Vitor Muniz"
        />
        <div>
          <strong>Vitor Muniz</strong>
          <span>Computação</span>
        </div>
      </header>

      <p>010101010101010011101010101010011110101001010</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
