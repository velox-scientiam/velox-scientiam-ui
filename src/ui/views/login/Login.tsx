import React, { FunctionComponent } from 'react';

import { FormProps } from '../../../interfaces/form/form.interface';
import FormComponent from '../../components/form/form-component';
import { loginFormSetting } from './utilities';

const Login: FunctionComponent = () => {
  const formSettings: FormProps = loginFormSetting;

  return (
    <FormComponent
      formSettings={formSettings}
      buttonText="Login"
      entryHeaderText="Login, please!"
    />
  );
};

export default Login;
