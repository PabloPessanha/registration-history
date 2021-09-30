import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Header({ user }) {
  const history = useHistory();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('logged');
    history.push('/login');
  });

  return (
    <header className={styles.header}>
      <div className={styles.infoContainer}>
        <h1 className={styles.heroTitle}>
          <strong>Regis</strong>
          tory
        </h1>
        <div className={styles.userInfo}>
          <span>{`Usuário: ${user}`}</span>
          <button type="button" onClick={handleLogout} id="logout">Sair</button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};
