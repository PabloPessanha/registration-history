import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
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
