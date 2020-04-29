import {
  required,
  minLength,
  isEmail,
  passwordValidator,
} from './../../utilities/validators';
import { FormProps } from '../../../interfaces/form/form.interface';

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
      { validator: minLength, arg: 8 },
    ],
  },
};
