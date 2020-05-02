import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

import Navigation from './ui/components/navigation';
import Home from './ui/views/home';
import Signup from './ui/views/signup';
import Login from './ui/views/login';

// TODO: check theme colors for mui
const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
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
