import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { Header, Footer, NotLogged, UserCard, ConfirmDelete } from '../../components';
import styles from './styles.module.scss';

export default function AllUsers() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('logged'));
    const getUsers = JSON.parse(localStorage.getItem('users'));
    if (userEmail) setUser(userEmail.email);
    if (getUsers) setUsers(getUsers);
  }, []);

  const handleDelete = useCallback(() => {
    window.scrollTo(0, 0);
    setConfirmDelete(true);
  });

  const deleteConfirmed = useCallback(() => {
    const deletedUser = users.filter(({ email }) => email !== user);
    localStorage.setItem('users', JSON.stringify(deletedUser));
    localStorage.removeItem('logged');
    history.push('/');
  }, [users, user]);

  if (!user) return <NotLogged />;
  return (
    <div>
      { confirmDelete && (
        <ConfirmDelete deleteConfirmed={deleteConfirmed} confirm={() => setConfirmDelete(false)} />
      )}
      <Header user={user} />
      <h1 className={styles.title}>Usuários cadastrados</h1>
      { users.map((usr) => (
        <UserCard
          key={usr.email}
          user={usr}
          main={usr.email === user}
          handleDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}
