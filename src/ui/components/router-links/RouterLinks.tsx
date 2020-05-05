import React, { FunctionComponent, Fragment } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { generate as generateId } from 'shortid';

import Button from '@material-ui/core/Button';

import { NavigationLink } from '../../../interfaces/navigation';
import themeColors from '../../global/themeColors';

interface RouterLinksProps {
  links: NavigationLink[];
}

const styles = {
  paddingLeft: '15px',
  paddingRight: '15px',
  borderRadius: 0,
};

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
              color: themeColors.black,
              backgroundColor: themeColors.white,
            }}
            key={'router-link-' + generateId()}
            style={styles}
          >
            {name}
          </Button>
        );
      })}
    </Fragment>
  );
};

export default RouterLinks;
