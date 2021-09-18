import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import routes from 'constants/routes';
import MESSAGES from 'constants/messages';

import {
  StyledHeaderWrapper,
  StyledHeaderContainer,
  StyledTitle,
  StyledLink,
} from './styles';

const Header = ({ className }) => (
  <StyledHeaderWrapper className={classNames(className)}>
    <StyledHeaderContainer>
      <StyledTitle>{MESSAGES.WORK}</StyledTitle>
      <StyledLink to={routes.home}>{MESSAGES.VIEW_CASE}</StyledLink>
    </StyledHeaderContainer>
  </StyledHeaderWrapper>
);

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};

export default Header;
