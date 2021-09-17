import { createSelector } from 'reselect';

const getCore = (state) => state.core;
const getLoading = createSelector(getCore, (core) => core.loading);
const getRedirectTo = createSelector(getCore, (core) => core.redirectTo);

const coreSelectors = {
  getCore,
  getLoading,
  getRedirectTo,
};

export default coreSelectors;
