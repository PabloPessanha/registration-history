import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderWithHistory from './renderWithHistory';
import Register from '../pages/Register';

const Render = renderWithHistory(<Register />);

describe('Verifica a existencia de elementos da página de registro/cadastro', () => {
  const { container, screen } = Render;

  it('Verifica se a página possui todos os inputs', () => {
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
    const register = screen.getByText(/Cadastrar/);
    const login = screen.getByText(/Login/);

    expect(register).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });

  it('Verifica se página possui a imagem requirida', () => {
    const mainImage = screen.getByRole('img');

    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute('src', '/bg-min.jpg');
    expect(mainImage).toHaveAttribute('alt', /Main coffe image/);
  });
});

describe('Verifica a ação da página com base nas ações', () => {
  it('Verifica se todos os inputs estiverem preenchidos corretamente, ele redireciona para a página de usúarios', () => {

  });
  it('Verifica se aparece um aviso se o email não for válido', () => {

  });
  it('Verifica se aparece um aviso se o email já estiver cadastrado', () => {

  });
  it('Verifica se aparece um aviso se o CPF não for válido', () => {

  });
  it('Verifica se aparece um aviso se o CPF já estiver cadastrado', () => {

  });
  it('Verifica se aparece um aviso se o nome for preenchido de forma incorreta', () => {

  });
  it('Verifica se aparece um aviso se o telefone for preenchido de forma incorreta', () => {

  });
});
