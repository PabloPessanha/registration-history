import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { cpfFormatter, phoneFormatter } from '../../utils';

export default function RegisterInputs() {
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  function handleChange({ target }) {
    switch (target.id) {
      case 'cpf-input':
        return setCpf(cpfFormatter(target.value));
      case 'tel-input':
        return setPhone(phoneFormatter(target.value));
      default:
        return null;
    }
  }

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
        <input type="text" id="cpf-input" value={cpf} onChange={handleChange} maxLength="14" />
      </label>
      <label htmlFor="tel-input">
        Telefone
        <input type="text" id="tel-input" value={phone} onChange={handleChange} maxLength="15" />
      </label>
      <div>
        <button type="submit">Cadastrar</button>
        <Link to="/login">Login 🠖</Link>
      </div>
    </form>
  );
}
