import React from 'react';
import { LoginForm } from '../../components';
import styles from './styles.module.scss';

export default function Login() {
  return (
    <div className={styles.homepage}>
      <LoginForm />
      <div className={styles.mainImage} />
    </div>
  );
}
