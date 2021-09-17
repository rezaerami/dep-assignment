import React from 'react';
import PropTypes from 'prop-types';

import { StyledHomeWrapper } from './styles';

const HomePage = ({ className }) => (
  <StyledHomeWrapper className={className}>
    <h1>this is content of Home</h1>
  </StyledHomeWrapper>
);

HomePage.propTypes = {
  className: PropTypes.string,
};
HomePage.defaultProps = {
  className: '',
};

export default HomePage;
