import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';
import leanLogo from '../../assets/Leanwork-logo.svg';

export default function Header() {
  const [user, setUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('logged'));
    setUser(userEmail.email);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('logged');
    history.push('/');
  });

  return (
    <header className={styles.header}>
      <div className={styles.infoContainer}>
        <a href="https://www.leanwork.com.br/">
          <img src={leanLogo} alt="lean logo" />
        </a>
        <div className={styles.userInfo}>
          <span>{`Usúario: ${user}`}</span>
          <button type="button" onClick={handleLogout}>Sair</button>
        </div>
      </div>
    </header>
  );
}
