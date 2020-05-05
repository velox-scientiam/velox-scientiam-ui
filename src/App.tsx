import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import Navigation from './ui/components/navigation';
import Home from './ui/views/home';
import Signup from './ui/views/signup';
import Login from './ui/views/login';
import themeColors from './ui/global/themeColors';

// TODO: check theme colors for mui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeColors.white,
    },
    secondary: {
      main: themeColors.black,
    },
    type: 'dark',
  },
});

const App = (): ReactElement => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
