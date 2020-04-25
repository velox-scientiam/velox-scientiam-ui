import React from 'react';
import ReactDOM from 'react-dom';

import NavigationLinks from './NavigationLinks';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<NavigationLinks />, div);
});
