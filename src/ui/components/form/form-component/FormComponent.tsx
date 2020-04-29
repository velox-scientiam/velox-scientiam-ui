import React, {
  FormEvent,
  useState,
  ChangeEvent,
  FunctionComponent,
} from 'react';
import { Box, Theme, CssBaseline } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import {
  FormProps,
  WithStyles,
} from '../../../../interfaces/form/form.interface';
import { mapLabel, errorHandler } from '../../../utilities/validators';
import InputComponent from '../input-component';
import FormHeader from '../form-header';
import ButtonComponent from '../button';

const styles = (theme: Theme): StyleRules => ({
  root: {
    margin: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3))]: {
      width: 450,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const FormComponent: FunctionComponent<
  FormProps & WithStyles<typeof styles>
> = ({ formSettings, classes, entryHeaderText, buttonText }) => {
  const initialSettings: FormProps = formSettings;
  const [userInfo, setUserInfo] = useState(initialSettings.values[0]);
  const [errorMessage, setErrorMessage] = useState<any>('');
  const [isFormDone, setIsFormDone] = useState<boolean>(false);

  const handleSignup = (event: FormEvent<HTMLElement>): void => {
    event.preventDefault();

    const errors = errorHandler(userInfo, initialSettings.validationRules);

    setErrorMessage(Object.assign({}, ...errors));

    if (Object.keys(errors[0]).length === 0) {
      setIsFormDone(!isFormDone);
      // Send userInfo data to db
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      {isFormDone ? (
        <FormHeader headerText="Thanks!" />
      ) : (
        <>
          <FormHeader headerText={entryHeaderText} />

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

            <ButtonComponent buttonText={buttonText} />
          </form>
        </>
      )}
    </Box>
  );
};

export default withStyles(styles)(FormComponent);
