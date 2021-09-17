import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { CrossIcon, DeptIcon, MenuIcon } from 'resources/icons';

import routes from 'constants/routes';
import MESSAGES from 'constants/messages';

import { LayoutContext } from 'components/Common/Layout/context';

import {
  StyledNavMenuWrapper,
  StyledNavMenuContent,
  StyledMenuButton,
} from './styles';

const NavMenu = ({ className }) => {
  const { isMegaMenuVisible, setIsMegaMenuVisible } = useContext(LayoutContext);

  return (
    <StyledNavMenuWrapper
      className={classNames(className, {
        'is-mega-menu-open': isMegaMenuVisible,
      })}
    >
      <StyledNavMenuContent>
        <Link to={routes.home}>
          <DeptIcon width={100} />
        </Link>
        <StyledMenuButton
          onClick={() => setIsMegaMenuVisible(!isMegaMenuVisible)}
        >
          {!isMegaMenuVisible && (
            <>
              <span>{MESSAGES.MENU}</span>
              <MenuIcon />
            </>
          )}
          {isMegaMenuVisible && <CrossIcon width="2.4rem" height="2.4rem" />}
        </StyledMenuButton>
      </StyledNavMenuContent>
    </StyledNavMenuWrapper>
  );
};

NavMenu.propTypes = {
  className: PropTypes.string,
};
NavMenu.defaultProps = {
  className: '',
};

export default NavMenu;
