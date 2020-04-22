import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Navigation />
    </Router>,
    div,
  );
});

it('should render all links in navigation', () => {
  const { getByText } = render(
    <Router>
      <Navigation />
    </Router>,
  );
  const homeButton = getByText('Home');
  const loginButton = getByText('Login');
  const signupButton = getByText('Login');

  expect(homeButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});
