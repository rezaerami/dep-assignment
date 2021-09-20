import articlesTypes from './types';

export const initialStates = {
  list: {
    metadata: {},
    results: [],
  },
};

const articlesReducers = (state = initialStates, action) => {
  switch (action.type) {
    case articlesTypes.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return { ...state };
  }
};

export default articlesReducers;
