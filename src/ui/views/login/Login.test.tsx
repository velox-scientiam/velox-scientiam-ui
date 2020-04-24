import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Login from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Login />, div);
});

it('should render heading', () => {
  const { getByText } = render(<Login />);
  const heading = getByText('Log in here');

  expect(heading).toBeInTheDocument();
});
