import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Signup from './Signup';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Signup />, div);
});

it('should render heading', () => {
  const { getByText } = render(<Signup />);
  const heading = getByText('Sigun up here');

  expect(heading).toBeInTheDocument();
});
