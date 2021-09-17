import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Header, Content, Footer } from './partials';
import { StyledLayoutWrapper } from './styles';

const Layout = ({ className, children }) => (
  <StyledLayoutWrapper className={classNames(className)}>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </StyledLayoutWrapper>
);

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {
  className: '',
};

export default Layout;
