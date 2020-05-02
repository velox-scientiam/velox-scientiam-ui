import {
  required,
  minLength,
  emailValidator,
  passwordMatchValidator,
  mapLabel,
} from './validators';
import { FormProps } from '../../interfaces/form/form.interface';
import { ErrorMessage } from '../../interfaces/form/constants';

const formSetting: FormProps = {
  values: [
    {
      username: '',
      email: '',
      password: 'a@b.com',
      confirmPassword: 'abc.com',
    },
  ],
  validationRules: {},
};

describe('Map input field label', () => {
  it(`When mapLabel is called with a string 'username' it should return 'User name'`, () => {
    const result = mapLabel('username');

    expect(result).toBe('User name');
  });
});

describe('Required', () => {
  it(`When required called with title being an empty string, an error should be '${ErrorMessage.REQUIRED} 6'`, () => {
    const result: string = required('username', formSetting.values);

    expect(result).toBe(`${ErrorMessage.REQUIRED}`);
  });
});

describe('Min length', () => {
  it(`When a username input field is shorter the required length, an error should be ${ErrorMessage.MIN_LENGTH}`, () => {
    const result = minLength('username', formSetting.values[0], 6);

    expect(result).toBe(`${ErrorMessage.MIN_LENGTH} 6`);
  });
});

describe('Email validator', () => {
  it(`When email input is incorrect, an error should be ${ErrorMessage.EMAIL}`, () => {
    const result = emailValidator('email', formSetting.values[0]);

    expect(result).toBe(ErrorMessage.EMAIL);
  });
});

describe('Password match validator', () => {
  it(`When password and confirm password inputs don't match, an error should be ${ErrorMessage.PASSWORD_MATCH}`, () => {
    const result = passwordMatchValidator(
      'confirmPassword',
      formSetting.values[0],
      'password',
    );

    expect(result).toBe(ErrorMessage.PASSWORD_MATCH);
  });
});
