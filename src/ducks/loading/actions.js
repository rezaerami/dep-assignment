import { createAction } from 'helpers/reduxHelpers';

import loadingTypes from './types';

export default {
  clearOne: createAction(loadingTypes.CLEAR_ONE),
  clearSome: createAction(loadingTypes.CLEAR_SOME),
  clearAll: createAction(loadingTypes.CLEAR_ALL),
  timeoutOne: createAction(loadingTypes.TIMEOUT_ONE),
  timeoutOnGoing: createAction(loadingTypes.TIMEOUT_ON_GOING),
};
