import GLOBALS from 'constants/globals';
import { getActionStatus } from 'helpers/reduxHelpers';

const getActionNames = (actions) =>
  actions.reduce((result, action) => {
    const [name, status] = getActionStatus(action().type);
    if (status) {
      result.push(name);
    }
    return result;
  }, []);

const timeoutActions = (actions) =>
  actions.reduce((result, action) => {
    const [name, status] = getActionStatus(action().type);
    if (status) {
      // eslint-disable-next-line no-param-reassign
      result[name] = GLOBALS.API_STATUSES.TIMEOUT;
    }
    return result;
  }, {});

const getTimeoutRequests = (actions) =>
  Object.keys(actions).filter(
    (key) => actions[key] === GLOBALS.API_STATUSES.TIMEOUT,
  );

export default {
  getActionNames,
  timeoutActions,
  getTimeoutRequests,
};
