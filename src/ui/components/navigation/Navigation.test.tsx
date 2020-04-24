import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';

const navInRouter = (): React.ReactElement => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(navInRouter(), div);
});
