import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import routes from 'constants/routes';
import MESSAGES from 'constants/messages';
import { Button } from 'components/Globals';

import {
  StyledHeaderWrapper,
  StyledHeaderContainer,
  StyledTitle,
  StyledButtonWrapper,
} from './styles';

const Header = ({ className }) => (
  <StyledHeaderWrapper className={classNames(className)}>
    <StyledHeaderContainer>
      <StyledTitle>{MESSAGES.WORK}</StyledTitle>
      <StyledButtonWrapper>
        <Button as={Link} to={routes.home}>
          {MESSAGES.VIEW_CASE}
        </Button>
      </StyledButtonWrapper>
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
