import React, { FunctionComponent } from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import { withStyles, StyleRules, createStyles } from '@material-ui/core/styles';

import { InputComponentProps } from '../../../../interfaces/form/form.interface';
import { WithStyles } from '../../../../interfaces/shared/style.interface';

import themeColors from '../../../global/themeColors';

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

interface StyledInputProps
  extends InputComponentProps,
    WithStyles<typeof styles> {}

const InputComponent: FunctionComponent<StyledInputProps> = ({
  classes,
  value,
  name,
  label,
  errorMessage,
  inputHandler,
  isAutoFocused,
}) => {
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
        autoFocus={isAutoFocused ? true : false}
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
