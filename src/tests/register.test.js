import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import renderWithHistory from './renderWithHistory';
import Register from '../pages/Register';

describe('Verifica a existencia de elementos da página de registro/cadastro', () => {
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

  it('Verifica se página possui a imagem requirida', () => {
    renderWithHistory(<Register />);
    const mainImage = screen.getByRole('img');

    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute('src', '/bg-min.jpg');
    expect(mainImage).toHaveAttribute('alt', /Main coffe image/);
  });
});

describe('Verifica a ação da página com base nas ações', () => {
  const fakeUser = { name: 'Bruno souza', cpf: '147.945.234-54', email: 'bruno@gmail.com', tel: '(47) 98532-1914' };

  beforeEach(() => {
    localStorage.removeItem('users');
  });

  it('Verifica se aparece um aviso se o email não for válido', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const email = container.querySelector('#email-input');

    userEvent.type(email, 'teste@gmail');
    userEvent.click(register);

    const emailWarning = screen.getByText(/O email está incorreto./);

    expect(emailWarning).toBeInTheDocument();
  });

  it('Verifica se aparece um aviso se o email já estiver cadastrado', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const email = container.querySelector('#email-input');
    localStorage.setItem('users', JSON.stringify(fakeUser));

    userEvent.type(email, 'bruno@gmail.com');
    userEvent.click(register);

    const emailWarning = screen.getByText(/O email já está cadastrado. Tente fazer Login./);

    expect(emailWarning).toBeInTheDocument();
  });

  it('Verifica se aparece um aviso se o CPF não for válido', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const cpf = container.querySelector('#cpf-input');

    userEvent.type(cpf, '1245123512');
    userEvent.click(register);

    const cpfWarning = screen.getByText(/O CPF está incorreto, coloque 11 digitos./);

    expect(cpfWarning).toBeInTheDocument();
  });

  it('Verifica se aparece um aviso se o CPF já estiver cadastrado', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const cpf = container.querySelector('#cpf-input');
    localStorage.setItem('users', JSON.stringify(fakeUser));

    userEvent.type(cpf, '14794523454');
    userEvent.click(register);

    const cpfWarning = screen.getByText(/O CPF já está cadastrado./);

    expect(cpfWarning).toBeInTheDocument();
  });

  it('Verifica se aparece um aviso se o nome for preenchido de forma incorreta', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const name = container.querySelector('#name-input');

    userEvent.type(name, 'João');
    userEvent.click(register);

    const telWarning = screen.getByText(/O Nome está incorreto. Coloque, no minímo, 8 caracteres./);

    expect(telWarning).toBeInTheDocument();
  });

  it('Verifica se aparece um aviso se o telefone for preenchido de forma incorreta', () => {
    const { container } = renderWithHistory(<Register />);
    const register = screen.getByText(/Cadastrar/);

    const tel = container.querySelector('#tel-input');

    userEvent.type(tel, '349612342');
    userEvent.click(register);

    const telWarning = screen.getByText(/O Telefone está incorreto. Coloque no formato DDD + 8 ou 9 digitos./);

    expect(telWarning).toBeInTheDocument();
  });

  it('Verifica se todos os inputs estiverem preenchidos corretamente, ele redireciona para a página de usúarios', () => {
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
