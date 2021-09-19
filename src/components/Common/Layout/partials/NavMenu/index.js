import React, { useContext, useRef, useEffect, useCallback } from 'react';
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
  const navMenuRef = useRef();

  const handleNavClass = useCallback(() => {
    if (window.scrollY >= navMenuRef.current.offsetHeight) {
      navMenuRef.current.classList.add('active');
    } else {
      navMenuRef.current.classList.remove('active');
    }
  }, [navMenuRef]);

  const { isMegaMenuVisible, setIsMegaMenuVisible } = useContext(LayoutContext);
  useEffect(handleNavClass, [isMegaMenuVisible]);
  useEffect(() => {
    window.addEventListener('scroll', handleNavClass);

    return () => window.removeEventListener('scroll', handleNavClass);
  }, []);

  return (
    <StyledNavMenuWrapper
      ref={navMenuRef}
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
          {isMegaMenuVisible && <CrossIcon width="2rem" height="2rem" />}
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
