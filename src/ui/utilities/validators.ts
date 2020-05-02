import {
  Validator,
  FormFields,
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
  values[inputField as keyof typeof values] === undefined ||
  values[inputField as keyof typeof values] === null ||
  values[inputField as keyof typeof values] === ''
    ? ErrorMessage.REQUIRED
    : '';

export const minLength: Validator = (
  inputField,
  values,
  length: number,
): string =>
  values[inputField as keyof typeof values].length < length
    ? `${ErrorMessage.MIN_LENGTH} ${length}`
    : '';

export const passwordMatchValidator: Validator = (
  inputField,
  values,
  inputFieldToMatch: string,
): string =>
  values[inputField as keyof typeof values] !==
  values[inputFieldToMatch as keyof typeof values]
    ? ErrorMessage.PASSWORD_MATCH
    : '';

export const emailValidator: Validator = (email, values): string => {
  // eslint-disable-next-line
  const emailRegExP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return values[email as keyof typeof values] &&
    !!values[email as keyof typeof values].match(emailRegExP)
    ? ''
    : ErrorMessage.EMAIL;
};

export const errorHandler = (
  userData: FormFields,
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
