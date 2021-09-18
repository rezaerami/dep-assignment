import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { LayoutProvider } from './context';

import { Header, Content, Footer, NavMenu, MegaMenu } from './partials';
import { StyledLayoutWrapper } from './styles';

const Layout = ({ className, children }) => {
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false);
  return (
    <StyledLayoutWrapper className={classNames(className)}>
      <LayoutProvider
        value={{
          isMegaMenuVisible,
          setIsMegaMenuVisible,
        }}
      >
        <NavMenu />

        {isMegaMenuVisible && <MegaMenu />}

        <Header />

        <Content>{children}</Content>

        <Footer />
      </LayoutProvider>
    </StyledLayoutWrapper>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {
  className: '',
};

export default Layout;
