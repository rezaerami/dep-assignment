import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StyledHeaderWrapper } from './styles';

const Header = ({ className }) => (
  <StyledHeaderWrapper className={classNames(className)}>
    this is header
  </StyledHeaderWrapper>
);

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};

export default Header;
