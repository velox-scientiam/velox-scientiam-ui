import React, {
  FormEvent,
  useState,
  ChangeEvent,
  FunctionComponent,
  Fragment,
} from 'react';
import { Box, Theme, CssBaseline } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import {
  FormProps,
  FormFields,
} from '../../../../interfaces/form/form.interface';
import { WithStyles } from '../../../../interfaces/shared/style.interface';
import { mapLabel, errorHandler } from '../../../utilities/validators';
import InputComponent from '../input-component';
import TextWrapper from '../../shared/text-wrapper';
import ButtonComponent from '../../shared/button';

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

interface FormComponentProps extends WithStyles<typeof styles> {
  entryHeaderText: string;
  buttonText: string;
  formSettings: FormProps<FormFields[]>;
}

const FormComponent: FunctionComponent<FormComponentProps> = ({
  formSettings,
  classes,
  entryHeaderText,
  buttonText,
}) => {
  const [userInfo, setUserInfo] = useState(formSettings.values[0]);
  const [errorMessage, setErrorMessage] = useState(formSettings.values[0]);
  const [isFormDone, setIsFormDone] = useState<boolean>(false);

  const onFormSubmit = (event: FormEvent<HTMLElement>): void => {
    event.preventDefault();

    const errors = errorHandler(userInfo, formSettings.validationRules);

    setErrorMessage(Object.assign({}, ...errors));

    if (Object.keys(errors[0]).length === 0) {
      setIsFormDone(!isFormDone);
      // Send userInfo data to db
    }
  };

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  return (
    <Fragment>
      <Box className={classes.root}>
        <CssBaseline />
        {isFormDone ? (
          <TextWrapper type="h2" headerText="Thanks!" />
        ) : (
          <Fragment>
            <TextWrapper type="h2" headerText={entryHeaderText} />

            <form onSubmit={onFormSubmit}>
              {Object.keys(userInfo).map((inputKey, index) => (
                <InputComponent
                  key={`input-field-${inputKey}}`}
                  value={userInfo[inputKey as keyof typeof userInfo]}
                  inputHandler={onInputValueChange}
                  name={inputKey}
                  label={mapLabel(inputKey)}
                  errorMessage={errorMessage[inputKey as keyof typeof userInfo]}
                  isAutoFocused={index === 0}
                />
              ))}

              <ButtonComponent
                type="submit"
                variant="contained"
                color="primary"
                buttonText={buttonText}
              />
            </form>
          </Fragment>
        )}
      </Box>
    </Fragment>
  );
};

export default withStyles(styles)(FormComponent);
