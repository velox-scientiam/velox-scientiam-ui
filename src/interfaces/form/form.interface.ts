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
