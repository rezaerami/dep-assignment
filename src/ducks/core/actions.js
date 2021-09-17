import { createAction } from 'helpers/reduxHelpers';
import coreTypes from './types';

const coreActions = {
  initialize: createAction(coreTypes.INITIALIZE),
  initializeFinished: createAction(coreTypes.INITIALIZE_FINISHED),

  setRedirectTo: createAction(coreTypes.SET_REDIRECT_TO),
};

export default coreActions;
