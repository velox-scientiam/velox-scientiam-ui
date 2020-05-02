import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, StyleRules } from '@material-ui/core/styles';

import {
  WithStyles,
  TypographyProps,
} from '../../../../interfaces/shared/style.interface';
import themeColors from '../../../global/themeColors';

const styles = (): StyleRules => ({
  title: {
    color: themeColors.black,
    fontSize: '24px',
    fontWeight: 800,
  },
});

interface TextWrapperProps extends TypographyProps, WithStyles<typeof styles> {}

const TextWrapper: FunctionComponent<TextWrapperProps> = ({
  classes,
  headerText,
  type,
}) => {
  return (
    <Typography variant={type} gutterBottom className={classes.title}>
      {headerText}
    </Typography>
  );
};

export default withStyles(styles)(TextWrapper);
