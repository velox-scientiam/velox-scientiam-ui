import React from 'react';

import { FormProps } from '../../../interfaces/form/form.interface';
import FormComponent from '../../components/form/form-component';
import { signUpFormSetting } from './utilities';

const Signup = (): JSX.Element => {
  const formSettings: FormProps = signUpFormSetting;

  return (
    <FormComponent
      formSettings={formSettings}
      buttonText="Sign up"
      entryHeaderText="Sign up, please!"
    />
  );
};

export default Signup;
