import React, { FunctionComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { generate as generateId } from 'shortid';

import Button from '@material-ui/core/Button';

import { NavigationLink } from '../../../interfaces/navigation';

interface RouterLinksProps {
  links: NavigationLink[];
}

const RouterLinks: FunctionComponent<RouterLinksProps> = ({ links }) => {
  return (
    <Fragment>
      {links.map(({ name, target }) => (
        <Button
          color="inherit"
          key={'router-link-' + generateId()}
          component={Link}
          to={target}
        >
          {name}
        </Button>
      ))}
    </Fragment>
  );
};

export default RouterLinks;
