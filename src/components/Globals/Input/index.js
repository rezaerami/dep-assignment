import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledError,
} from './styles';

const Input = ({ className, label, error, ...rest }) => (
  <StyledInputWrapper className={classNames(className)}>
    {!!label && <StyledLabel>{label}</StyledLabel>}
    <StyledInput {...rest} />
    {!!error && <StyledError>{error}</StyledError>}
  </StyledInputWrapper>
);

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};
Input.defaultProps = {
  className: '',
  label: '',
  error: '',
};

export default Input;
