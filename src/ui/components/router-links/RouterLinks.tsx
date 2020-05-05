import React, { FunctionComponent, Fragment } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { generate as generateId } from 'shortid';

import Button from '@material-ui/core/Button';

import { NavigationLink } from '../../../interfaces/navigation';
interface RouterLinksProps {
  links: NavigationLink[];
}

const RouterLinks: FunctionComponent<RouterLinksProps> = ({ links }) => {
  return (
    <Fragment>
      {links.map(({ name, target }) => {
        return (
          <Button
            exact
            component={Link}
            to={target}
            color="inherit"
            activeStyle={{
              textDecoration: 'underline',
            }}
            key={'router-link-' + generateId()}
          >
            {name}
          </Button>
        );
      })}
    </Fragment>
  );
};

export default RouterLinks;
