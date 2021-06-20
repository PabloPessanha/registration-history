import React from 'react';
import { RegisterInputs } from '../../components';
// import bgImage from '../../assets/bg-min.jpg';
import styles from './styles.module.scss';

export default function Register() {
  return (
    <div className={styles.homepage}>
      <RegisterInputs />
      <div className={styles.mainImage} />
    </div>
  );
}
