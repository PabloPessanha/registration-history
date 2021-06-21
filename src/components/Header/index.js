import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import leanLogo from '../../assets/Leanwork-logo.svg';

export default function Header({ user }) {
  const history = useHistory();

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
          <span>{`Usuário: ${user}`}</span>
          <button type="button" onClick={handleLogout}>Sair</button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};
