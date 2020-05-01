import {
  Validator,
  FormProps,
  FormValidation,
  ValidationProps,
  FormErrors,
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
    ? ErrorMessage.REQUIRED
    : '';

export const minLength: Validator = (
  inputField,
  values,
  length: number,
): string =>
  values[inputField].length < length
    ? `${ErrorMessage.MIN_LENGTH} ${length}`
    : '';

export const passwordMatchValidator: Validator = (
  inputField,
  values,
  inputFieldToMatch: string,
): string =>
  values[inputField] !== values[inputFieldToMatch]
    ? ErrorMessage.PASSWORD_MATCH
    : '';

export const emailValidator: Validator = (email, values): string => {
  // eslint-disable-next-line
  const emailRegExP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return values[email] && !!values[email].match(emailRegExP)
    ? ''
    : ErrorMessage.EMAIL;
};

export const errorHandler = (
  userData: FormProps,
  validatorRules: ValidationProps,
  errors: FormErrors[] = [],
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
