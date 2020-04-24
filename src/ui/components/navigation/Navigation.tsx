import React, { FunctionComponent } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import NAVIGATION_LINKS from '../../global/navigation';
import RouterLinks from '../router-links';

const Navigation: FunctionComponent = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar className="nav-container">
        <RouterLinks links={NAVIGATION_LINKS}></RouterLinks>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
