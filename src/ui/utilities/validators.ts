import {
  Validator,
  FormProps,
  FormValidation,
  ValidationProps,
} from '../../interfaces/form/form.interface';
import { ErrorMessage } from '../../interfaces/form/constants';

export const mapLabel = (inputField: string): string =>
  inputField === 'username'
    ? 'User name'
    : inputField === 'confirmPassword'
    ? 'Confirm password'
    : inputField;

export const required: Validator = (inputField, values): string =>
  values[inputField] === undefined ||
  values[inputField] === null ||
  values[inputField] === ''
    ? `${mapLabel(inputField)} ${ErrorMessage.REQUIRED}`
    : '';

export const minLength: Validator = (
  inputField,
  values,
  length: number,
): string =>
  values[inputField].length < length
    ? `${ErrorMessage.MAX_LENGTH} ${length} 
    `
    : '';

export const passwordValidator: Validator = (
  inputField,
  values,
  _inputeField: string,
): string =>
  values[inputField] !== values[_inputeField]
    ? ErrorMessage.PASSWORD_MATCH
    : '';

export const isEmail: Validator = (email, values): string => {
  // eslint-disable-next-line
  const emailRegExP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return values[email] && !!values[email].match(emailRegExP)
    ? ''
    : ErrorMessage.EMAIL;
};

type ErrorsType = {
  [key: string]: string;
};
/* export const isErrorEmpty = (errors: string[]): boolean =>
  Object.keys(errors[0]) === 0; */

export const errorHandler = (
  userData: FormProps,
  validatorRules: ValidationProps,
  errors: any = [],
): string[] => {
  Object.keys(userData).forEach((inputField) => {
    const rules = validatorRules[inputField];

    Object.values(rules).forEach((rule: FormValidation) => {
      const error = rule.validator(inputField, userData, rule.arg);

      if (error) {
        errors = [...errors, { [inputField]: error }];
      }
    });
  });

  return [Object.assign({}, ...errors.reverse())];
};
