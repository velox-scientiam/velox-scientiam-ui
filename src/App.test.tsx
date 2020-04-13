import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders hello documents world', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Hello Documents World!');

  expect(textElement).toBeInTheDocument();
});
