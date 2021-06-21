import React from 'react';
import { RegisterForm } from '../../components';
import styles from './styles.module.scss';

export default function Register() {
  return (
    <div className={styles.homepage}>
      <RegisterForm />
      <div className={styles.mainImage} />
    </div>
  );
}
