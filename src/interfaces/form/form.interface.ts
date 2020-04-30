import { ChangeEventHandler } from 'react';

export interface InputComponentProps {
  value: string;
  name: string;
  label: string;
  errorMessage: string;
  isAutoFocused: boolean;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
}

export interface FormValues {
  [key: string]: string;
}
/* export interface FormDefaultProps {
  defaultValues: FormValues;
} */

export interface FormProps {
  [key: string]: any;
  validationRules: ValidationProps;
}

export type Validator = (
  inputName: string,
  values: FormProps,
  arg?: any,
) => string;

export interface FormValidation {
  validator: Validator;
  arg?: any;
}

export interface ValidationProps {
  [key: string]: FormValidation | FormValidation[];
}

export interface FormUIProps extends FormProps {
  entryHeaderText: string;
  buttonText: string;
}

export interface SignUpFormFields {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormFields {
  email: string;
  password: string;
}

export interface FormState<T> {
  values: T;
}
export interface FormErrors<T> {
  values: T;
}
