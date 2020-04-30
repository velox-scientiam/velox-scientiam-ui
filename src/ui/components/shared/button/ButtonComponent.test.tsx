import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import ButtonComponent from './ButtonComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const buttonText = 'Sign up';

  ReactDOM.render(<ButtonComponent buttonText={buttonText} />, div);
});

it('button should have text', () => {
  const { container } = render(<ButtonComponent buttonText="Sign up" />);
  const textElement = container.querySelector('.MuiButton-label');

  expect(textElement).not.toBeEmpty();
});
