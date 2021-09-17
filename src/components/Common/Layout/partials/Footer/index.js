import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StyledFooterWrapper } from './styles';

const Footer = ({ className }) => (
  <StyledFooterWrapper className={classNames(className)}>
    this is footer
  </StyledFooterWrapper>
);

Footer.propTypes = {
  className: PropTypes.string,
};
Footer.defaultProps = {
  className: '',
};

export default Footer;
