import uiTypes from './types';

export const initialStates = {
  menus: {
    metadata: {},
    results: [],
  },
  footerLinks: {
    metadata: {},
    results: [],
  },
};

const uiReducers = (state = initialStates, action) => {
  switch (action.type) {
    case uiTypes.GET_MENUS_SUCCESS:
      return {
        ...state,
        menus: action.payload,
      };
    case uiTypes.GET_FOOTER_LINKS_SUCCESS:
      return {
        ...state,
        footerLinks: action.payload,
      };
    default:
      return { ...state };
  }
};

export default uiReducers;
