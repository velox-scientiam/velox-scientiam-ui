import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import * as shortid from 'shortid';

import Button from '@material-ui/core/Button';

import { NavigationLink } from '../../../interfaces';

interface RouterLinksProps {
  links: NavigationLink[];
}

const RouterLinks: FunctionComponent<RouterLinksProps> = ({ links }) => {
  return (
    <React.Fragment>
      {links.map((link) => (
        <Button
          color="inherit"
          key={'router-link' + shortid.generate()}
          component={Link}
          to={link.target}
        >
          {link.name}
        </Button>
      ))}
    </React.Fragment>
  );
};

export default RouterLinks;
