import clientTypes from './types';

export const initialStates = {
  list: {
    metadata: {},
    results: [],
  },
};

const clientsReducers = (state = initialStates, action) => {
  switch (action.type) {
    case clientTypes.GET_CLIENTS_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return { ...state };
  }
};

export default clientsReducers;
