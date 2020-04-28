import React, { ChangeEventHandler } from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import { withStyles, StyleRules, createStyles } from '@material-ui/core/styles';

import { WithStyles } from '../../../interfaces/signup/signup.interface';

import themeColors from '../../global/themeColors';

const styles = (): StyleRules =>
  createStyles({
    labelStyle: {
      color: themeColors.black,
      '&::first-letter': {
        textTransform: 'capitalize',
      },
    },
    input: {
      color: themeColors.black,
      '&::after, &::before, &:hover:not(.Mui-disabled):before': {
        borderBottom: `2px solid ${themeColors.black}`,
      },
      '&:focus': {
        borderBottom: `2px solid -webkit-focus-ring-colo;
        `,
      },
    },
    inputWrapper: {
      marginBottom: 6,
      marginTop: 0,
    },
    errorWrapper: {
      color: themeColors.red,
      fontSize: 16,
    },
  });

interface InputComponentProps extends WithStyles<typeof styles> {
  value: string;
  name: string;
  label: string;
  errorMessage: string;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
}

const InputComponent = ({
  classes,
  value,
  name,
  label,
  errorMessage,
  inputHandler,
}: InputComponentProps): JSX.Element => {
  const { input, errorWrapper, labelStyle, inputWrapper } = classes;
  return (
    <FormControl
      className={inputWrapper}
      margin="dense"
      color="secondary"
      fullWidth
    >
      <InputLabel className={labelStyle} htmlFor={name}>
        {label}
      </InputLabel>
      <Input
        className={input}
        id={name}
        name={name}
        autoComplete={name}
        value={value}
        onChange={inputHandler}
        autoFocus={name === 'username' ? true : false}
        type={
          name === 'password' || name === 'confirmPassword'
            ? 'password'
            : 'text'
        }
      />

      <FormHelperText className={errorWrapper} id={name}>
        {errorMessage}
      </FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(InputComponent);
