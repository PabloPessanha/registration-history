import React, { useState, useEffect } from 'react';
import { Header, Footer, NotLogged } from '../../components';

export default function AllUsers() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('logged'));
    if (userEmail) setUser(userEmail.email);
  }, []);

  if (!user) return <NotLogged />;
  return (
    <div>
      <Header user={user} />
      <Footer />
    </div>
  );
}
