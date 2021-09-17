import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { styledTheme } from 'config/theme';
import Router from 'components/Common/Router';
import GlobalStyles from 'components/styles';

import { StyledHocWrapper } from './styles';

const Hoc = ({ className }) => (
  <ThemeProvider theme={styledTheme}>
    <GlobalStyles />
    <StyledHocWrapper className={classNames(className)}>
      <Router />
    </StyledHocWrapper>
  </ThemeProvider>
);

Hoc.propTypes = {
  className: PropTypes.string,
};
Hoc.defaultProps = {
  className: '',
};

export default Hoc;
