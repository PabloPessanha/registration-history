import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import renderWithHistory from './renderWithHistory';
import Register from '../pages/Register';

describe('Verifica a existencia de elementos da página de cadastro', () => {
  it('Verifica se a página possui todos os inputs', () => {
    const { container } = renderWithHistory(<Register />);
    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');
    const name = container.querySelector('#name-input');
    const tel = container.querySelector('#tel-input');

    expect(email).toBeInTheDocument();
    expect(cpf).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(tel).toBeInTheDocument();
  });

  it('Verifica se a página possui os dois botões', () => {
    renderWithHistory(<Register />);

    const register = screen.getByText(/Cadastrar/);
    const login = screen.getByText(/Login/);

    expect(register).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });

  it('Verifica se página possui a imagem requerida', () => {
    const { container } = renderWithHistory(<Register />);
    const mainImage = container.querySelector('div.mainImage');

    expect(mainImage).toBeInTheDocument();
  });
});

describe('Verifica o preenchimento dos campos da página de cadastro para o botão habilitar', () => {
  it('Verifica se o campo "nome" deve possuir, no minimo, 8 caracteres', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const name = container.querySelector('#name-input');
    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');
    const tel = container.querySelector('#tel-input');

    userEvent.type(name, 'João');
    userEvent.type(email, 'teste@gmail.com');
    userEvent.type(cpf, '13523563211');
    userEvent.type(tel, '11997235681');
    expect(register).toBeDisabled();

    userEvent.clear(name);
    userEvent.type(name, 'João Carlos');
    expect(register).toBeEnabled();
  });

  it('Verifica se o campo "email" deve conter o formato correto', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const name = container.querySelector('#name-input');
    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');
    const tel = container.querySelector('#tel-input');

    userEvent.type(name, 'João Carlos');
    userEvent.type(email, 'teste@gmail');
    userEvent.type(cpf, '13523563211');
    userEvent.type(tel, '11997235681');
    expect(register).toBeDisabled();

    userEvent.clear(email);
    userEvent.type(email, 'teste.com');
    expect(register).toBeDisabled();

    userEvent.clear(email);
    userEvent.type(email, 'teste@gmail.com');
    expect(register).toBeEnabled();
  });

  it('Verifica se o campo "CPF" deve possuir seus 11 dígitos', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const name = container.querySelector('#name-input');
    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');
    const tel = container.querySelector('#tel-input');

    userEvent.type(name, 'João Carlos');
    userEvent.type(email, 'teste@gmail.com');
    userEvent.type(cpf, '1352356');
    userEvent.type(tel, '11997235681');
    expect(register).toBeDisabled();

    userEvent.clear(cpf);
    userEvent.type(cpf, '135235623');
    expect(register).toBeDisabled();

    userEvent.clear(cpf);
    userEvent.type(cpf, '13523562423');
    expect(register).toBeEnabled();
  });

  it('Verifica se o campo "telefone" deve possuir, no minimo, DDD+ 8 dígitos', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const name = container.querySelector('#name-input');
    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');
    const tel = container.querySelector('#tel-input');

    userEvent.type(name, 'João');
    userEvent.type(email, 'teste@gmail.com');
    userEvent.type(cpf, '13523563211');
    userEvent.type(tel, '11997235681');
    expect(register).toBeDisabled();

    userEvent.type(name, 'João Carlos');
    expect(register).toBeEnabled();
  });

  it('Verifica se todos os inputs estiverem preenchidos corretamente, ele redireciona para a página de usuários', () => {
    const { container, history } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const name = container.querySelector('#name-input');
    const email = container.querySelector('#email-input');
    const cpf = container.querySelector('#cpf-input');
    const tel = container.querySelector('#tel-input');

    userEvent.type(name, 'João Carlos');
    userEvent.type(email, 'teste@gmail.com');
    userEvent.type(cpf, '13523563211');
    userEvent.type(tel, '11997235681');

    userEvent.click(register);

    expect(history.location.pathname).toBe('/users');
  });
});
