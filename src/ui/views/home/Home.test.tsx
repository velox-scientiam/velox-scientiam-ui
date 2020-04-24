import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Home />, div);
});

it('should render heading', () => {
  const { getByText } = render(<Home />);
  const heading = getByText('Hello Documents World!');

  expect(heading).toBeInTheDocument();
});
