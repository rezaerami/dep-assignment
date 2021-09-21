import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { ThemeProvider } from 'styled-components';

import { coreActions } from 'ducks/core';

import { styledTheme } from 'config/theme';
import Router from 'components/Common/Router';
import GlobalStyles from 'components/styles';

import { StyledHocWrapper } from './styles';

const Hoc = ({ className, initialize }) => {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyles />
      <StyledHocWrapper className={classNames(className)}>
        <Router />
      </StyledHocWrapper>
    </ThemeProvider>
  );
};

Hoc.propTypes = {
  className: PropTypes.string,
  initialize: PropTypes.func,
};
Hoc.defaultProps = {
  className: '',
};

export default connect(null, {
  initialize: coreActions.initialize,
})(Hoc);
