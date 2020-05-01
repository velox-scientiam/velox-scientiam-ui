import { ChangeEventHandler } from 'react';

export interface InputComponentProps {
  value: string;
  name: string;
  label: string;
  errorMessage: string;
  isAutoFocused: boolean;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
}

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

export interface FormValues {
  [key: string]: string[];
}
export interface FormErrors {
  [key: string]: string;
}

export interface FormState {
  values: FormValues;
  errors: FormErrors;
}

export interface SubmitFormResult {
  success: boolean;
  errors?: FormErrors;
}
