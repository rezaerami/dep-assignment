import { getActionStatus } from 'helpers';

import messageUtils from './utils';
import messageTypes from './types';

export const initialState = {
  alerts: [],
  toasts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case messageTypes.SHOW_ALERT:
      /* eslint-disable no-case-declarations */
      const { key, ...rest } = action.payload;
      const [name] = getActionStatus(key().type);
      /* eslint-enable no-case-declarations */
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            key: name,
            ...rest,
          },
        ],
      };
    case messageTypes.SHOW_TOAST:
      return { ...state, toasts: [...state.toasts, action.payload] };
    case messageTypes.CLEAR_ALERT:
      return {
        ...state,
        alerts: messageUtils.clearAlert(state.alerts, action.payload),
      };
    case messageTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: messageUtils.filterToasts(action.payload, state.toasts),
      };
    default:
      return state;
  }
};
