import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { cpfFormatter } from '../../utils';
import styles from './styles.module.scss';
import leanLogo from '../../assets/Leanwork-logo.svg';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [verifyInfos, setVerifyInfos] = useState(false);
  const [warningUser, setWarningUser] = useState('');
  const history = useHistory();

  const handleChange = useCallback(({ target }) => {
    switch (target.id) {
      case 'email-input':
        return setEmail(target.value);
      case 'cpf-input':
        return setCpf(cpfFormatter(target.value));
      default:
        return null;
    }
  }, [email, cpf]);

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem('users'));
    if (!allUsers) return setWarningUser('no user');

    const user = allUsers.find((usr) => usr.email === email);
    if (!user) return setWarningUser('no user');
    if (user.cpf !== cpf) return setWarningUser('cpf not compatible');

    localStorage.setItem('logged', JSON.stringify(user));
    return history.push('/users');
  }, [email, cpf]);

  useEffect(() => {
    const regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regexEmail.test(email) && cpf.length >= 14) return setVerifyInfos(true);
    return setVerifyInfos(false);
  }, [email, cpf]);

  return (
    <div className={styles.registerSide}>
      <div className={styles.imageContainer}>
        <img src={leanLogo} alt="Logo da lean" />
        <h1>Lean login</h1>
      </div>
      <form>
        { warningUser === 'no user' && <h4 className={styles.warning}>Usuário não existe.</h4>}
        { warningUser === 'cpf not compatible' && <h4 className={styles.warning}>CPF não compativel.</h4>}
        <label htmlFor="email-input">
          E-mail
          <input type="text" id="email-input" value={email} onChange={handleChange} />
        </label>
        <label htmlFor="cpf-input">
          CPF
          <input type="text" id="cpf-input" value={cpf} onChange={handleChange} maxLength="14" />
        </label>

        <div>
          <button type="submit" onClick={handleLogin} disabled={!verifyInfos}>Login</button>
          <Link to="/">Cadastrar-se 🠖</Link>
        </div>
      </form>
    </div>
  );
}
