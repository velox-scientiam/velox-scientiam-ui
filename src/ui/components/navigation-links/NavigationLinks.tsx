import React, { FunctionComponent, Fragment } from 'react';

import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';

import NAVIGATION_LINKS from '../../global/navigation';
import RouterLinks from '../router-links';

// TODO: Implement router links inside a menu in mobile, triggered by menu button
const Navigation: FunctionComponent = () => {
  return (
    <Fragment>
      <Hidden smDown>
        <RouterLinks links={NAVIGATION_LINKS}></RouterLinks>
      </Hidden>
      <Hidden mdUp>
        <MenuIcon color="primary" />
      </Hidden>
    </Fragment>
  );
};

export default Navigation;
