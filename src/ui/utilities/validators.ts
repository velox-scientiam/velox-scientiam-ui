import {
  Validator,
  FormProps,
  FormValidation,
  ValidationProps,
} from '../../interfaces/signup/signup.interface';
import { ErrorMessage } from '../../interfaces/signup/constants';

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
        errors.push({
          [inputField]: error,
        });
      }
    });
  });

  return errors;
};

export const SignUpFormSetting: FormProps = {
  values: [
    {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  ],
  validationRules: {
    username: [{ validator: required }, { validator: minLength, arg: 4 }],
    email: [{ validator: required }, { validator: isEmail }],
    password: [{ validator: required }, { validator: minLength, arg: 8 }],
    confirmPassword: [
      { validator: required },
      { validator: passwordValidator, arg: 'password' },
    ],
  },
};
