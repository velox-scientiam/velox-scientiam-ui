import React from 'react';

import FormComponent from '../../components/form/form-component';
import { signUpFormSetting } from './utilities';

const Signup = (): JSX.Element => (
  <FormComponent
    formSettings={signUpFormSetting}
    buttonText="Sign up"
    entryHeaderText="Sign up, please!"
  />
);

export default Signup;
