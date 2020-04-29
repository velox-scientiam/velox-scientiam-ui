import {
  required,
  minLength,
  emailValidator,
} from './../../utilities/validators';
import { FormProps } from '../../../interfaces/form/form.interface';

export const loginFormSetting: FormProps = {
  values: [
    {
      email: '',
      password: '',
    },
  ],
  validationRules: {
    email: [{ validator: required }, { validator: emailValidator }],
    password: [{ validator: required }, { validator: minLength, arg: 8 }],
  },
};
