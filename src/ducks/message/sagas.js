import { takeEvery, put, delay } from 'redux-saga/effects';

import GLOBALS from 'constants/globals';

import { messageActions, messageTypes } from '..';

export function* showToast(action) {
  const { type, payload } = action;
  const id = Date.now();

  yield put(
    messageActions.showToast({
      id,
      type: type.split('_')[1].toLowerCase(),
      active: true,
      ...payload,
    }),
  );

  yield delay(GLOBALS.TOAST_TIMEOUT);
  yield put(messageActions.removeToast(id));
}
export function* showAlert(action) {
  const { type, payload } = action;

  yield put(
    messageActions.showAlert({
      id: Date.now(),
      type: type.split('_')[1].toLowerCase(),
      ...payload,
    }),
  );
}

const messageSagas = [
  takeEvery(
    [
      messageTypes.SHOW_INFO_TOAST,
      messageTypes.SHOW_SUCCESS_TOAST,
      messageTypes.SHOW_ERROR_TOAST,
      messageTypes.SHOW_WARNING_TOAST,
    ],
    showToast,
  ),
  takeEvery(
    [
      messageTypes.SHOW_INFO_ALERT,
      messageTypes.SHOW_SUCCESS_ALERT,
      messageTypes.SHOW_ERROR_ALERT,
      messageTypes.SHOW_WARNING_ALERT,
    ],
    showAlert,
  ),
];

export default messageSagas;
