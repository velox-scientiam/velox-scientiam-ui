import React, { FunctionComponent } from 'react';

import FormComponent from '../../components/form/form-component';
import { loginFormSetting } from './utilities';

const Login: FunctionComponent = () => (
  <FormComponent
    formSettings={loginFormSetting}
    buttonText="Login"
    entryHeaderText="Login, please!"
  />
);

export default Login;
