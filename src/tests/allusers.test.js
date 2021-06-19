import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithHistory from './renderWithHistory';
import AllUsers from '../pages/AllUsers';
import users from './users';

describe('Verifica se a página é renderizada com os elementos requiridos', () => {
  localStorage.setItem('logged', JSON.stringify(users[0]));
  localStorage.setItem('users', JSON.stringify(users));

  afterAll(() => {
    localStorage.clear();
  });

  it('Verifica se a página possui um header com a logo da empresa, email do usúario, e um botão sair', () => {
    const { container } = renderWithHistory(<AllUsers />);
    const header = container.querySelector('header');
    const leanLogo = screen.getByAltText('Logo da leanwork');
    const loggedUser = screen.getByText(`Usúario: ${users[0].email}`);
    const logoutButton = container.querySelector('#logout');

    expect(header).toBeInTheDocument();
    expect(header).toContainElement(leanLogo);
    expect(header).toContainElement(loggedUser);
    expect(header).toContainElement(logoutButton);
  });

  it('Verifica se a página possui um footer com o nome do autor, e um link para o perfil do git', () => {
    const { container } = renderWithHistory(<AllUsers />);
    const footer = container.querySelector('footer');
    const profileLink = container.querySelector('footer>a');

    expect(footer).toBeInTheDocument();
    expect(footer).toContainElement(profileLink);
    expect(profileLink).toHaveAttribute('href', 'https://github.com/PabloPessanha');
  });

  it('Verifica se os usúarios já cadastrados são renderizados em cards na tela', () => {
    renderWithHistory(<AllUsers />);
    const usersCards = screen.getAllByTestId('card');

    expect(usersCards).toHaveLength(4);
  });
});
