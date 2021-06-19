import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import renderWithHistory from './renderWithHistory';
import AllUsers from '../pages/AllUsers';

describe('Verifica se a página é renderizada com os elementos requiridos', () => {
  const fakeUser = [{ name: 'João carlos', cpf: '563.241.452-04', email: 'Joaoc@gmail.com', tel: '(29) 5550-1052' }];
  localStorage.setItem('logged', JSON.stringify(fakeUser));

  afterAll(() => {
    localStorage.clear();
  });

  it('Verifica se a página possui um header com a logo da empresa, email do usúario, e um botão sair', () => {
    const { container } = renderWithHistory(<AllUsers />);
    const header = container.querySelector('header');
    const leanLogo = screen.getByAltText('Logo da leanwork');
    const loggedUser = screen.getByText(`Usúario: ${fakeUser.email}`);
    const logoutButton = container.querySelector('#logout');

    expect(header).toBeInTheDocument();
    expect(header).toContainElement(leanLogo);
    expect(header).toContainElement(loggedUser);
    expect(header).toContainElement(logoutButton);
  });
});
