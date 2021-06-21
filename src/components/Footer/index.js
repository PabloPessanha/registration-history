import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h4>
        Feito por
        <a href="https://github.com/PabloPessanha"> Pablo Pessanha</a>
      </h4>
    </footer>
  );
}
