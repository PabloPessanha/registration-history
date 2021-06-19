import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import renderWithHistory from './renderWithHistory';
import NotFound from '../pages/Register';
import App from '../App';

describe('Verifica se é redirecionado para página "Not found", caso teste acessar pela URL, uma página inexistente', () => {
  it('Primeira URL', () => {
    const { history } = renderWithHistory(<App />);
    history.push('/1');

    expect(history.location.pathname).toBe('/not-found');
  });

  it('Segunda URL', () => {
    const { history } = renderWithHistory(<App />);
    history.push('/teste');

    expect(history.location.pathname).toBe('/not-found');
  });

  it('Terceira URL', () => {
    const { history } = renderWithHistory(<App />);
    history.push('/algo/teste');

    expect(history.location.pathname).toBe('/not-found');
  });
});

describe('Verifica se a página "Not found", tem todos os elementos necessários', () => {
  const { history } = renderWithHistory(<NotFound />);

  it('Verifica se possui uma imagem', () => {
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('Verifica se possui um texto H1, dizendo que a página não foi encontrar', () => {
    const notFoundText = screen.getByText(/Página não encontrada/);

    expect(notFoundText).toBeInTheDocument();
    expect(notFoundText.tagName).toBe('H1');
  });

  it('Verifica se possui um "button", com a mensagem "Voltar para página de registro", e se ele redireciona para o mesmo', () => {
    const homeButton = screen.getByText(/Voltar para página de registro./);

    expect(homeButton).toBeInTheDocument();
    expect(homeButton.tagName).toBe('BUTTON');

    userEvent.click(homeButton);

    expect(history.location.pathname).toBe('/');
  });
});
