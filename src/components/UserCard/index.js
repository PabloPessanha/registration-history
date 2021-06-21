import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function UserCard({ user, main, handleDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.infos}>
        <h2>{user.email}</h2>
        <h4>{user.cpf}</h4>
        <h4>{user.tel}</h4>
      </div>
      { main && (
        <div>
          <button type="button" id="delete" onClick={handleDelete}>Deletar usuário</button>
        </div>
      )}
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    tel: PropTypes.string,
  }).isRequired,
  main: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
