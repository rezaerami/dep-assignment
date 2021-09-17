import { createSelector } from 'reselect';
import { getActionStatus } from 'helpers';

/**
 * Main selectors, we did memoize this functions
 */
const getMessage = (state) => state.message;

const getToasts = createSelector(getMessage, (message) => message.toasts);
const getAlerts = createSelector(getMessage, (message) => message.alerts);

const getAlert = (action) =>
  createSelector(getAlerts, (alert) => {
    const [name] = getActionStatus(action().type);
    return alert.find(({ key }) => key === name) || {};
  });

export default {
  getMessage,
  getToasts,
  getAlerts,
  getAlert,
};
