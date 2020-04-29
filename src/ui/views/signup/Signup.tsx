import React from 'react';

import { FormProps } from '../../../interfaces/form/form.interface';
import FormComponent from '../../components/form/form-component';
import { SignUpFormSetting } from './utilities';

const Signup = (): JSX.Element => {
  const formSettings: FormProps = SignUpFormSetting;

  return (
    <FormComponent
      formSettings={formSettings}
      buttonText="Sign up"
      entryHeaderText="Sign up, please!"
    />
  );
};

export default Signup;
