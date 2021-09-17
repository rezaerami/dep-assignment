import { createAction } from 'helpers/reduxHelpers';

import types from './types';

export default {
  showToast: createAction(types.SHOW_TOAST),
  showInfoToast: createAction(types.SHOW_INFO_TOAST),
  showSuccessToast: createAction(types.SHOW_SUCCESS_TOAST),
  showErrorToast: createAction(types.SHOW_ERROR_TOAST),
  showWarningToast: createAction(types.SHOW_WARNING_TOAST),

  showAlert: createAction(types.SHOW_ALERT),
  showInfoAlert: createAction(types.SHOW_INFO_ALERT),
  showSuccessAlert: createAction(types.SHOW_SUCCESS_ALERT),
  showErrorAlert: createAction(types.SHOW_ERROR_ALERT),
  showWarningAlert: createAction(types.SHOW_WARNING_ALERT),

  /**
   * This methods will clear top toast messages of store
   * @returns {{payload, type}}
   */
  removeToast: createAction(types.REMOVE_TOAST),
  /**
   * Will clear a special alert from store
   * @param payload
   * @returns {{payload, type}}
   */
  clearAlert: createAction(types.CLEAR_ALERT),
};
