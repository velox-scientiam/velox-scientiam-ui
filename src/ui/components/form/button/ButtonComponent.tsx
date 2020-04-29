import React, { FunctionComponent } from 'react';
import { Button, Theme } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import { WithStyles } from '../../../../interfaces/form/form.interface';
import themeColors from '../../../global/themeColors';

const styles = (theme: Theme): StyleRules => ({
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

interface ButtonProps extends WithStyles<typeof styles> {
  buttonText: string;
}

const ButtonComponent: FunctionComponent<ButtonProps> = ({
  classes,
  buttonText,
}): JSX.Element => {
  return (
    <Button
      className={classes.button}
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
    >
      {buttonText}
    </Button>
  );
};

export default withStyles(styles)(ButtonComponent);
