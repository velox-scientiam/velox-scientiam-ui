import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import { WithStyles } from '../../../../interfaces/form/form.interface';
import themeColors from '../../../global/themeColors';

const styles = (): StyleRules => ({
  title: {
    color: themeColors.black,
    fontSize: '24px',
    fontWeight: 800,
  },
});

interface FormHeaderProps extends WithStyles<typeof styles> {
  headerText: string;
}

const FormHeader = ({ classes, headerText }: FormHeaderProps): JSX.Element => {
  return (
    <Typography
      component="h2"
      variant="h2"
      gutterBottom
      className={classes.title}
    >
      {headerText}
    </Typography>
  );
};

export default withStyles(styles)(FormHeader);
