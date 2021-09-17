import coreTypes from './types';

export const initialStates = {
  loading: true,
  redirectTo: null,
};

const coreReducers = (state = initialStates, action) => {
  switch (action.type) {
    case coreTypes.INITIALIZE:
      return {
        ...state,
        loading: true,
      };
    case coreTypes.INITIALIZE_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case coreTypes.SET_REDIRECT_TO:
      return {
        ...state,
        redirectTo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default coreReducers;
