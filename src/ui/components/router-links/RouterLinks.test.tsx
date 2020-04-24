import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import RouterLinks from './RouterLinks';
import { NavigationLink } from '../../../interfaces';

const MOCK_LINKS: NavigationLink[] = [
  {
    name: 'Test',
    target: '/Test',
  },
  {
    name: 'Somewhere',
    target: '/somewhere',
  },
  {
    name: 'Unknown',
    target: '/unknown',
  },
];

const renderLinksInRouter = (links = MOCK_LINKS): React.ReactElement => {
  return (
    <Router>
      <RouterLinks links={links} />
    </Router>
  );
};

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(renderLinksInRouter(), div);
});

it.each(MOCK_LINKS.map((link) => link.name))(
  'should render %s link in navigation',
  (linkText: string) => {
    const { getByText } = render(renderLinksInRouter());
    const link = getByText(linkText);

    expect(link).toBeInTheDocument();
  },
);
