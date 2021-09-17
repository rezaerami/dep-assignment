import GLOBALS from 'constants/globals';
import { getActionStatus } from 'helpers';

import loadingTypes from './types';
import loadingUtils from './utils';

export const initialState = {};

export default (state = initialState, action) => {
  const { type } = action;
  const [name, status] = getActionStatus(type);

  /* eslint-disable no-case-declarations */
  switch (type) {
    case loadingTypes.CLEAR_ONE:
      return {
        ...state,
        [name]: null,
      };
    case loadingTypes.CLEAR_SOME:
      const typesToClear = loadingUtils.getActionNames(action.payload);
      return {
        ...state,
        ...typesToClear,
      };
    case loadingTypes.CLEAR_ALL:
      return {};
    case loadingTypes.TIMEOUT_ONE:
      return {
        ...state,
        [name]: GLOBALS.API_STATUSES.TIMEOUT,
      };
    case loadingTypes.TIMEOUT_ON_GOING:
      const typesToTimeout = loadingUtils.timeoutActions(state, [
        GLOBALS.API_STATUSES.FAILURE,
        GLOBALS.API_STATUSES.REQUEST,
      ]);
      return {
        ...state,
        ...typesToTimeout,
      };
    default:
      if (!status) {
        return { ...state };
      }

      return {
        ...state,
        [name]: status,
      };
  }
};
