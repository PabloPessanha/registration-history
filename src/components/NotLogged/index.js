import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function NotLogged() {
  return (
    <div className={styles.notLogged}>
      <h1>Usuário não logado.</h1>
      <h4>
        Para acessar essa página você precisa se cadastrar ou logar.
      </h4>
      <div className={styles.links}>
        <Link to="/">Ir para página de cadastro</Link>
        <Link to="/login">Ir para página de login</Link>
      </div>
    </div>
  );
}
