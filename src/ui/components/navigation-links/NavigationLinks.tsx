import React, { FunctionComponent, Fragment, useState } from 'react';
import { Hidden, Drawer, List, IconButton } from '@material-ui/core';
import { Close as CloseIcon, Menu as MenuIcon } from '@material-ui/icons';

import { withStyles, StyleRules } from '@material-ui/core/styles';

import NAVIGATION_LINKS from '../../global/navigation';
import RouterLinks from '../router-links';
import { WithStyles } from '../../../interfaces/shared/style.interface';

const styles = (): StyleRules => ({
  menuIcon: {
    cursor: 'pointer',
  },
  iconButton: {
    justifyContent: 'flex-end',
    borderRadius: 0,
  },
  navLinksWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    '& a': {
      justifyContent: 'flex-start',
      borderRadius: 0,
      paddingLeft: '15px',
    },
  },
});

type NavProps = WithStyles<typeof styles>;

const Navigation: FunctionComponent<NavProps> = ({ classes }) => {
  const [state, setState] = useState<boolean>(false);

  const navToggleHandler = (): void => {
    setState(!state);
  };

  return (
    <Fragment>
      <Hidden smDown>
        <RouterLinks links={NAVIGATION_LINKS}></RouterLinks>
      </Hidden>
      <Hidden mdUp>
        <MenuIcon
          color="primary"
          onClick={navToggleHandler}
          className={classes.menuIcon}
        />
        {state && (
          <Drawer
            variant="temporary"
            anchor="left"
            open={state}
            onClose={navToggleHandler}
          >
            <IconButton
              onClick={navToggleHandler}
              className={classes.iconButton}
            >
              <CloseIcon />
            </IconButton>
            <List className={classes.navLinksWrapper}>
              <RouterLinks links={NAVIGATION_LINKS}></RouterLinks>
            </List>
          </Drawer>
        )}
      </Hidden>
    </Fragment>
  );
};

export default withStyles(styles)(Navigation);
