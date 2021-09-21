import { put, takeLatest, take } from 'redux-saga/effects';

import { coreActions, coreTypes, uiActions, uiTypes } from 'ducks';

import { globalSagaCatcher } from 'helpers';

function* initialize() {
  try {
    yield put(uiActions.getMenusRequest());
    yield put(uiActions.getFooterLinksRequest());

    yield take([uiTypes.GET_MENUS_SUCCESS, uiTypes.GET_FOOTER_LINKS_SUCCESS]);

    yield put(coreActions.initializeFinished());
  } catch (e) {
    yield globalSagaCatcher(coreActions.initializeFinished, e);
  }
}

const coreSagas = [takeLatest(coreTypes.INITIALIZE, initialize)];

export default coreSagas;
