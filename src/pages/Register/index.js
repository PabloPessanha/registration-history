import React from 'react';
import { RegisterInputs } from '../../components';
import styles from './styles.module.scss';

export default function Register() {
  return (
    <div className={styles.homepage}>
      <RegisterInputs />
      <div className={styles.mainImage} />
    </div>
  );
}
