import React from 'react';
import PropTypes from 'prop-types';

import { styledTheme } from 'config/theme';
import { StyledButton } from './styles';

const Button = (props) => <StyledButton {...props} />;

Button.propTypes = {
  status: PropTypes.oneOf(Object.keys(styledTheme.colors)),
  color: PropTypes.oneOf(Object.keys(styledTheme.colors)),
};
Button.defaultProps = {
  status: 'black',
  color: 'white',
};

export default Button;
