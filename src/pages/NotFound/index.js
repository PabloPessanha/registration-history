import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>Página não encontrada.</h1>
      <Link to="/">Voltar para página de registro.</Link>
    </div>
  );
}
