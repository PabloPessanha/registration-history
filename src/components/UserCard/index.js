import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function UserCard({ user, main, handleDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.infos}>
        <h2>
          <strong>Usuário: </strong>
          {user.name}
        </h2>
        <hr />
        <h4>
          <strong>Email: </strong>
          {user.email}
        </h4>
        <h4>
          <strong>CPF: </strong>
          {user.cpf}
        </h4>
        <h4>
          <strong>Tel/Celular: </strong>
          {user.tel}
        </h4>
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
