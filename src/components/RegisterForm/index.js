import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './styles.module.scss';
import { cpfFormatter, phoneFormatter } from '../../utils';
import leanLogo from '../../assets/Leanwork-logo.svg';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [tel, setTel] = useState('');
  const [verifyInfos, setVerifyInfos] = useState(false);
  const history = useHistory();

  const handleChange = useCallback(({ target }) => {
    switch (target.id) {
      case 'name-input':
        return setName(target.value);
      case 'email-input':
        return setEmail(target.value);
      case 'cpf-input':
        return setCpf(cpfFormatter(target.value));
      case 'tel-input':
        return setTel(phoneFormatter(target.value));
      default:
        return null;
    }
  }, [name, email, cpf, tel]);

  const handleSignup = useCallback((e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const user = { name, email, cpf, tel };
    if (!users) {
      localStorage.setItem('users', JSON.stringify([user]));
    } else {
      localStorage.setItem('users', JSON.stringify([...users, user]));
    }

    localStorage.setItem('logged', JSON.stringify(user));
    history.push('/users');
  }, [name, email, cpf, tel]);

  useEffect(() => {
    const regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (name.length > 8 && regexEmail.test(email) && cpf.length >= 14 && tel.length >= 14) {
      return setVerifyInfos(true);
    }
    return setVerifyInfos(false);
  }, [name, email, cpf, tel]);

  return (
    <div className={styles.registerSide}>
      <div className={styles.imageContainer}>
        <img src={leanLogo} alt="Logo da lean" />
        <h1>Lean cadastro</h1>
      </div>
      <form>
        <label htmlFor="name-input">
          Nome Completo
          <input type="text" id="name-input" value={name} onChange={handleChange} />
        </label>
        <label htmlFor="email-input">
          E-mail
          <input type="text" id="email-input" value={email} onChange={handleChange} />
        </label>
        <label htmlFor="cpf-input">
          CPF
          <input type="text" id="cpf-input" value={cpf} onChange={handleChange} maxLength="14" />
        </label>
        <label htmlFor="tel-input">
          Telefone
          <input type="text" id="tel-input" value={tel} onChange={handleChange} maxLength="15" />
        </label>
        <div>
          <button type="submit" onClick={handleSignup} disabled={!verifyInfos}>Cadastrar</button>
          <Link to="/login">Login 🠖</Link>
        </div>
      </form>
    </div>
  );
}
