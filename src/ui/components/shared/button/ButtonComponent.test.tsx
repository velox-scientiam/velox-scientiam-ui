import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ButtonComponent from './ButtonComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const buttonText = 'Sign up';

  ReactDOM.render(<ButtonComponent buttonText={buttonText} />, div);
});

it('should render text', () => {
  const buttonText = 'Sign up';
  const { getByText } = render(<ButtonComponent buttonText={buttonText} />);
  const heading = getByText(buttonText);

  expect(heading).toBeInTheDocument();
});
