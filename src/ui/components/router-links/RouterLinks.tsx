import React, { FunctionComponent, Fragment } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { generate as generateId } from 'shortid';

import Button from '@material-ui/core/Button';

import { NavigationLink } from '../../../interfaces/navigation';
import themeColors from '../../global/themeColors';

interface RouterLinksProps {
  links: NavigationLink[];
}

const RouterLinks: FunctionComponent<RouterLinksProps> = ({ links }) => {
  return (
    <Fragment>
      {links.map(({ name, target }) => {
        return (
          <Button
            color="inherit"
            key={'router-link-' + generateId()}
            component={Link}
            exact
            activeStyle={{
              color: themeColors.black,
              backgroundColor: themeColors.white,
            }}
            to={target}
          >
            {name}
          </Button>
        );
      })}
    </Fragment>
  );
};

export default RouterLinks;
