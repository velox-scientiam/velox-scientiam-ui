import React, { FunctionComponent } from 'react';

import { FormProps } from '../../../interfaces/form/form.interface';
import FormComponent from '../../components/form/form-component';
import { LoginFormSetting } from './utilities';

const Login: FunctionComponent = () => {
  const formSettings: FormProps = LoginFormSetting;

  return (
    <FormComponent
      SignUpFormSetting={formSettings}
      buttonText="Login"
      entryHeaderText="Login, blease!"
    />
  );
};

export default Login;
