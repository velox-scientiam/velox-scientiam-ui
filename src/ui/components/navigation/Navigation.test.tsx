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

it.each(['Home', 'Login', 'Signup'])(
  'should render %s link in navigation',
  (linkText: string) => {
    const { getByText } = render(
      <Router>
        <Navigation />
      </Router>,
    );
    const link = getByText(linkText);

    expect(link).toBeInTheDocument();
  },
);
