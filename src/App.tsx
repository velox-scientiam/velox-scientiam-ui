import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import themeColors from './ui/global/themeColors';
import ChangeBgColor from './ui/components/post-board';
import Navigation from './ui/components/navigation';
import Home from './ui/views/home';
import Signup from './ui/views/signup';
import Login from './ui/views/login';

const { black } = themeColors;

// TODO: check theme colors for mui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: black,
    },
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

        <ChangeBgColor />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
