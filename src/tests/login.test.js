import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import renderWithHistory from './renderWithHistory';
import Login from '../pages/Login';
import users from './users';

describe('Verifica a existencia de elementos da página de cadastro', () => {
  it('Verifica se a página possui todos os inputs', () => {
    const { container } = renderWithHistory(<Login />);
    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');

    expect(email).toBeInTheDocument();
    expect(cpf).toBeInTheDocument();
  });

  it('Verifica se a página possui os dois botões', () => {
    renderWithHistory(<Login />);

    const login = screen.getByText(/Login/);
    const register = screen.getByText(/Cadastrar-se/);

    expect(login).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });

  it('Verifica se página possui a imagem requerida', () => {
    const { container } = renderWithHistory(<Login />);
    const mainImage = container.querySelector('div.mainImage');

    expect(mainImage).toBeInTheDocument();
  });
});

describe('Verifica o preenchimento dos campos da página de cadastro para o botão habilitar', () => {
  beforeEach(() => {
    localStorage.setItem('users', JSON.stringify([users[0]]));
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('Verifica se o campo "email" deve conter o formato correto', () => {
    const { container } = renderWithHistory(<Login />);
    const login = screen.getByText(/Login/);

    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');

    userEvent.type(email, 'teste@gmail');
    userEvent.type(cpf, '13523563211');
    expect(login).toBeDisabled();

    userEvent.clear(email);
    userEvent.type(email, 'teste.com');
    expect(login).toBeDisabled();

    userEvent.clear(email);
    userEvent.type(email, 'teste@gmail.com');
    expect(login).toBeEnabled();
  });

  it('Verifica se o campo "CPF" deve possuir seus 11 dígitos', () => {
    const { container } = renderWithHistory(<Login />);
    const login = screen.getByText(/Login/);

    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');

    userEvent.type(email, 'teste@gmail.com');
    userEvent.type(cpf, '1352356');
    expect(login).toBeDisabled();

    userEvent.clear(cpf);
    userEvent.type(cpf, '135235623');
    expect(login).toBeDisabled();

    userEvent.clear(cpf);
    userEvent.type(cpf, '13523562423');
    expect(login).toBeEnabled();
  });

  it('Verifica se todos os inputs estiverem preenchidos corretamente, mas os dados estiverem errados, aparece um erro', () => {
    const { container } = renderWithHistory(<Login />);
    const login = screen.getByText(/Login/);

    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');

    userEvent.type(email, 'Joaoc@gmail.com');
    userEvent.type(cpf, '19523412451');

    userEvent.click(login);
    const warning = container.querySelector('#warning');

    expect(warning).toBeInTheDocument();
  });

  it('Verifica se todos os inputs estiverem preenchidos corretamente, ele redireciona para a página de usuários', () => {
    const { container, history } = renderWithHistory(<Login />);
    const login = screen.getByText(/Login/);

    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');

    userEvent.type(email, 'Joaoc@gmail.com');
    userEvent.type(cpf, '56324145204');

    userEvent.click(login);

    expect(history.location.pathname).toBe('/users');
  });
});
