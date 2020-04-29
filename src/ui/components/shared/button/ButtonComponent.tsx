import React, { FunctionComponent } from 'react';
import { Button, Theme } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import {
  WithStyles,
  ButtonProps,
} from '../../../../interfaces/shared/style.interface';

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

const ButtonComponent: FunctionComponent<
  ButtonProps & WithStyles<typeof styles>
> = ({ classes, buttonText, variant, type, color }): JSX.Element => {
  return (
    <Button
      className={classes.button}
      type={type}
      variant={variant}
      color={color}
      fullWidth
    >
      {buttonText}
    </Button>
  );
};

export default withStyles(styles)(ButtonComponent);
