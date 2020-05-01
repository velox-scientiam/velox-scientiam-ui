import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormComponent from './FormComponent';
import {
  FormTestParams,
  FormAttributes,
} from '../../../../interfaces/form/form.interface';
import { signUpFormSetting } from '../../../views/signup/utilities';
import { loginFormSetting } from '../../../views/login/utilities';

afterEach(cleanup);

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

const setAndCheckAttributes: FormAttributes = (element, value) => {
  expect(element).not.toBeNull();
  userEvent.type(element, value);
  expect(element).toHaveAttribute('value', value);
};

const formsTestHandler: FormTestParams = (
  testTitle,
  formSetting,
  inputLength,
) => {
  describe(`${testTitle} form`, (): void => {
    it('When submit without filling in fields, it should display errors', () => {
      const submitHandler = jest.fn((e) => e.preventDefault());
      const { getAllByText, container } = render(
        <FormComponent
          onSubmit={submitHandler}
          formSettings={formSetting}
          buttonText={testTitle}
          entryHeaderText={`${testTitle}, please!`}
        />,
      );
      const form: HTMLFormElement = container.querySelector('form');

      fireEvent.submit(form);

      const errorSpans = getAllByText('Field is required.');
      expect(errorSpans.length).toBe(inputLength);

      expect(submitHandler).not.toBeCalled();
    });
  });
};

formsTestHandler('Sign up', signUpFormSetting, 4);
formsTestHandler('Login', loginFormSetting, 2);

describe('Login form submit', () => {
  it('should fulfill sending okay, When submitted after filling the form', () => {
    const submitHandler = jest.fn((e) => e.preventDefault());
    const { container, getByText } = render(
      <FormComponent
        onSubmit={submitHandler}
        formSettings={loginFormSetting}
        buttonText="Submit"
        entryHeaderText="Login, please!"
      />,
    );

    const emailValue = 'abc@def.ghi';
    const passwordValue = 'password';

    const email: HTMLInputElement = container.querySelector('#email');
    const password: HTMLInputElement = container.querySelector('#password');

    setAndCheckAttributes(email, emailValue);
    setAndCheckAttributes(password, passwordValue);

    fireEvent.click(getByText('Submit').closest('button'));

    expect(getByText('Thanks!')).toBeInTheDocument();
  });
});

describe('Signup form submit', () => {
  it('should fulfill sending okay, When submitted after filling the form', () => {
    const submitHandler = jest.fn((e) => e.preventDefault());
    const { container, getByText } = render(
      <FormComponent
        onSubmit={submitHandler}
        formSettings={signUpFormSetting}
        buttonText="Submit"
        entryHeaderText="Signup, please!"
      />,
    );

    const usenameValue = 'Timo Ahava';
    const emailValue = 'abc@def.ghi';
    const passwordValue = 'password';
    const confirmPasswordValue = 'password';

    const username: HTMLInputElement = container.querySelector('#username');
    const password: HTMLInputElement = container.querySelector('#password');
    const email: HTMLInputElement = container.querySelector('#email');
    const confirmPassword: HTMLInputElement = container.querySelector(
      '#confirmPassword',
    );

    setAndCheckAttributes(username, usenameValue);
    setAndCheckAttributes(password, passwordValue);
    setAndCheckAttributes(email, emailValue);
    setAndCheckAttributes(confirmPassword, confirmPasswordValue);

    fireEvent.click(getByText('Submit').closest('button'));

    expect(getByText('Thanks!')).toBeInTheDocument();
  });
});
