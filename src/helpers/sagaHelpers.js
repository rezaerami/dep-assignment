import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import messageActions from 'ducks/message/actions';

export function* callService(service, action, params = {}) {
  const config = {
    headers: {},
    timeout: process.env.API_TIMEOUT,
    withCredentials: true,
    ...service(params),
  };

  const response = yield call(axios, config);
  console.log(`** Called service with **`, config.url, response?.data);

  return response;
}

export function* globalSagaCatcher(
  failureAction,
  e,
  action,
  messageType = 'alert',
) {
  console.error('err =>', e?.response?.data);

  const errors = e?.response?.data?.errors;
  const title = e?.response?.data?.userMessage;

  const errorPayload = {
    key: failureAction,
    title,
    errors,
  };

  if (messageType === 'alert') {
    yield put(messageActions.showErrorAlert(errorPayload));
  } else {
    yield put(messageActions.showErrorToast(errorPayload));
  }

  yield put(failureAction(e));
  return true;
}
