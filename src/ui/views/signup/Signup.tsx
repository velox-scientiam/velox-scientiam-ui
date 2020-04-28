import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Box, Button, Theme, CssBaseline, Typography } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import themeColors from '../../global/themeColors';
import InputComponent from './InputComponent';
import {
  FormProps,
  WithStyles,
} from '../../../interfaces/signup/signup.interface';
import {
  mapLabel,
  errorHandler,
  SignUpFormSetting,
} from './../../utilities/validators';

const styles = (theme: Theme): StyleRules => ({
  root: {
    margin: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3))]: {
      width: 450,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  title: {
    color: themeColors.black,
    fontSize: '24px',
    fontWeight: 800,
  },
  button: {
    display: 'block',
    padding: '12px 16px',
    margin: 'auto',
    width: '50%',
    borderRadius: 30,
    color: themeColors.white,
    backgroundColor: themeColors.black,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down(400 + theme.spacing(3))]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const Signup = ({ classes }: WithStyles<typeof styles>): JSX.Element => {
  const formSettings: FormProps = SignUpFormSetting;
  const [userInfo, setUserInfo] = useState(formSettings.values[0]);
  const [errorMessage, setErrorMessage] = useState<any>('');
  const [isFormDone, setIsFormDone] = useState<boolean>(false);
  const { root, title, button } = classes;

  const handleSignup = (event: FormEvent<HTMLElement>): void => {
    event.preventDefault();

    const errors = errorHandler(userInfo, formSettings.validationRules);

    setErrorMessage(Object.assign({}, ...errors));
    if (errors.length === 0) {
      setIsFormDone(!isFormDone);
      // Send userInfo data to db
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  return (
    <Box className={root}>
      <CssBaseline />
      {isFormDone ? (
        <Typography component="h2" variant="h2" gutterBottom className={title}>
          Thanks!!!
        </Typography>
      ) : (
        <>
          <Typography
            component="h2"
            variant="h2"
            gutterBottom
            className={title}
          >
            Sign up, blease!
          </Typography>

          <form onSubmit={handleSignup}>
            {Object.keys(userInfo).map((user, index) => (
              <InputComponent
                key={index}
                value={userInfo[user]}
                inputHandler={inputHandler}
                name={user}
                label={mapLabel(user)}
                errorMessage={errorMessage[user]}
              />
            ))}

            <Button
              className={button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </form>
        </>
      )}
    </Box>
  );
};

export default withStyles(styles)(Signup);
