import React, { FunctionComponent } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import NavigationLinks from '../navigation-links';
import SearchBar from '../search-bar';

const Navigation: FunctionComponent = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar className="nav-container">
        <Grid container alignItems="center">
          <Grid item md={8} xs={2}>
            <NavigationLinks />
          </Grid>

          <Grid item md={4} xs={10}>
            <SearchBar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
