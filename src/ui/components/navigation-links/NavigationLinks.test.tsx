import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationLinks from './NavigationLinks';

const renderNavInRouter = (): React.ReactElement => {
  return (
    <Router>
      <NavigationLinks />
    </Router>
  );
};

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(renderNavInRouter(), div);
});
