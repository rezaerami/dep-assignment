import { createSelector } from 'reselect';

import GLOBALS from 'constants/globals';
import { getActionStatus } from 'helpers/reduxHelpers';

import loadingUtils from './utils';

/**
 * Main selectors, we did memoize this functions
 */
export const getLoading = (state) => state.loading;

/**
 * Returns timed-out api requests
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const getTimedOutRequests = createSelector(getLoading, (loadings) =>
  loadingUtils.getTimeoutRequests(loadings),
);

/**
 * Create selector
 * @param action
 * @returns {function(*): *}
 */
export const createActionStatusSelector = (action) => {
  const [name] = getActionStatus(action().type);
  return createSelector(
    getLoading,
    (loading) => loading[name] || GLOBALS.API_STATUSES.NOT_CALLED,
  );
};

const loadingSelectors = {
  getLoading,
  getTimedOutRequests,
};

export default loadingSelectors;
