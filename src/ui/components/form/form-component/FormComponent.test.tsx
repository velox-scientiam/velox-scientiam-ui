import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import FormComponent from './FormComponent';
import { signUpFormSetting } from '../../../views/signup/utilities';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <FormComponent
      formSettings={signUpFormSetting}
      buttonText="Sign up"
      entryHeaderText="Sign up, please!"
    />,
    div,
  );
});

/* it('submits', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <FormComponent
      onSubmit={onSubmit}
      formSettings={signUpFormSetting}
      buttonText="Sign up"
      entryHeaderText="Sign up, please!"
    />,
  );

  fireEvent.submit(getByTestId('form'));

  expect(onSubmit).toBeCalled();
});
 */
