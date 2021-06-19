import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import renderWithHistory from './renderWithHistory';
import NotFound from '../pages/NotFound';

describe('Verifica se a página "Not found", tem todos os elementos necessários', () => {
  it('Verifica se possui uma imagem', () => {
    renderWithHistory(<NotFound />);
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('Verifica se possui um texto H1, dizendo que a página não foi encontrar', () => {
    renderWithHistory(<NotFound />);
    const notFoundText = screen.getByText(/Página não encontrada/);

    expect(notFoundText).toBeInTheDocument();
    expect(notFoundText.tagName).toBe('H1');
  });

  it('Verifica se possui um "button", com a mensagem "Voltar para página de registro", e se ele redireciona para o mesmo', async () => {
    const { history } = renderWithHistory(<NotFound />);
    const homeButton = screen.getByText(/Voltar para página de registro./);

    expect(homeButton).toBeInTheDocument();
    expect(homeButton.tagName).toBe('BUTTON');

    userEvent.click(homeButton);

    expect(history.location.pathname).toBeInTheDocument();
  });
});
