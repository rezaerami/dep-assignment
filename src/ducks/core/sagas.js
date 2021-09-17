import { put, takeLatest } from 'redux-saga/effects';

import { coreActions, coreTypes } from 'ducks';

import { globalSagaCatcher } from 'helpers';

function* initialize() {
  try {
    yield put(coreActions.initializeFinished());
  } catch (e) {
    yield globalSagaCatcher(coreActions.initializeFinished, e);
  }
}

const coreSagas = [takeLatest(coreTypes.INITIALIZE, initialize)];

export default coreSagas;
