import {
  required,
  minLength,
  emailValidator,
  passwordMatchValidator,
} from './../../utilities/validators';
import { FormProps } from '../../../interfaces/form/form.interface';

export const signUpFormSetting: FormProps = {
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
    email: [{ validator: required }, { validator: emailValidator }],
    password: [{ validator: required }, { validator: minLength, arg: 8 }],
    confirmPassword: [
      { validator: required },
      { validator: passwordMatchValidator, arg: 'password' },
      { validator: minLength, arg: 8 },
    ],
  },
};
