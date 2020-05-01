import { ChangeEventHandler } from 'react';

export interface InputComponentProps {
  value: string;
  name: string;
  label: string;
  errorMessage: string;
  isAutoFocused: boolean;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
}

export interface LoginFormFields {
  email: string;
  password: string;
}
export interface SignupFormFields {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type SignupFormFieldName = keyof SignupFormFields;

export type LoginFormFieldName = keyof LoginFormFields;

export type FormFields = SignupFormFields | LoginFormFields;

export type FormFieldName = keyof FormFields;

export interface FormProps<T> {
  values: T;
  validationRules: ValidationProps;
}

export type Validator = (
  inputName: string,
  values: FormFields,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arg?: any,
) => string;

export interface FormValidation {
  validator: Validator;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arg?: any;
}

export interface ValidationProps {
  [key: string]: FormValidation | FormValidation[];
}

export type FormTestParams = (
  testTitle: string,
  formSetting: FormProps<FormFields[]>,
  inputLength: number,
) => void;

export interface FormErrors {
  [key: string]: string;
}
