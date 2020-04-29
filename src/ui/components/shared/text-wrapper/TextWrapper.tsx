import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import {
  WithStyles,
  FormHeaderProps,
} from '../../../../interfaces/shared/style.interface';
import themeColors from '../../../global/themeColors';

const styles = (): StyleRules => ({
  title: {
    color: themeColors.black,
    fontSize: '24px',
    fontWeight: 800,
  },
});

const TextWrapper: FunctionComponent<
  FormHeaderProps & WithStyles<typeof styles>
> = ({ classes, headerText, type }) => {
  return (
    <Typography variant={type} gutterBottom className={classes.title}>
      {headerText}
    </Typography>
  );
};

export default withStyles(styles)(TextWrapper);
