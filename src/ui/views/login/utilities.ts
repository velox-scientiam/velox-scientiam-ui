import { required, minLength, isEmail } from './../../utilities/validators';
import { FormProps } from '../../../interfaces/form/form.interface';

export const LoginFormSetting: FormProps = {
  values: [
    {
      email: '',
      password: '',
    },
  ],
  validationRules: {
    email: [{ validator: required }, { validator: isEmail }],
    password: [{ validator: required }, { validator: minLength, arg: 8 }],
  },
};
