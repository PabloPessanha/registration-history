import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function ConfirmDelete({ deleteConfirmed, confirm }) {
  return (
    <div className={styles.confirmDelete}>
      <div className={styles.confirmMessage}>
        <h2>Fazer isso ira deletar sua conta permanentemente.</h2>
        <h4>Você tem certeza disso?</h4>
        <hr />
        <div className={styles.buttons}>
          <button type="button" onClick={deleteConfirmed}>Sim</button>
          <button type="button" onClick={confirm}>Não</button>
        </div>
      </div>
    </div>
  );
}

ConfirmDelete.propTypes = {
  deleteConfirmed: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
};
