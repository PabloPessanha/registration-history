import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const renderWithHistory = (component) => {
  const history = createMemoryHistory();
  const routeWithHistory = <Router history={history}>{component}</Router>;
  return ({
    ...render(routeWithHistory),
    history,
  });
};

export default renderWithHistory;
