import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function RegisterInputs() {
  return (
    <form className={styles}>
      <label htmlFor="name-input">
        Nome Completo
        <input type="text" id="name-input" />
      </label>
      <label htmlFor="email-input">
        E-mail
        <input type="text" id="email-input" />
      </label>
      <label htmlFor="cpf-input">
        CPF
        <input type="text" id="cpf-input" />
      </label>
      <label htmlFor="tel-input">
        Telefone
        <input type="text" id="tel-input" />
      </label>
      <div>
        <button type="submit">Cadastrar</button>
        <Link to="/login">Login 🠖</Link>
      </div>
    </form>
  );
}
