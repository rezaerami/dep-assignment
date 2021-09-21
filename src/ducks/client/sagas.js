import { put, takeLatest } from 'redux-saga/effects';

import { callService, globalSagaCatcher } from 'helpers';
import { clientActions, clientServices, clientTypes } from 'ducks';

function* getClientsRequest(action) {
  const { payload: params } = action;
  try {
    const response = yield callService(clientServices.getClients, { params });
    yield put(clientActions.getClientsSuccess(response.data));
  } catch (e) {
    yield globalSagaCatcher(clientActions.getClientsFailure, e);
  }
}

const clientSagas = [
  takeLatest(clientTypes.GET_CLIENTS_REQUEST, getClientsRequest),
];

export default clientSagas;
