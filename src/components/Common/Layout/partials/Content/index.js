import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StyledContentWrapper } from './styles';

const Content = ({ className, children }) => (
  <StyledContentWrapper className={classNames(className)}>
    {children}
  </StyledContentWrapper>
);

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Content.defaultProps = {
  className: '',
};

export default Content;
