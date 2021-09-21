import { put, takeLatest } from 'redux-saga/effects';

import { callService, globalSagaCatcher } from 'helpers';
import { uiActions, uiServices, uiTypes } from 'ducks';

function* getMenusRequest(action) {
  const { payload: params } = action;
  try {
    const response = yield callService(uiServices.getMenus, { params });
    yield put(uiActions.getMenusSuccess(response.data));
  } catch (e) {
    yield globalSagaCatcher(uiActions.getMenusFailure, e);
  }
}

function* getFooterLinksRequest(action) {
  const { payload: params } = action;
  try {
    const response = yield callService(uiServices.getFooterLinks, { params });
    yield put(uiActions.getFooterLinksSuccess(response.data));
  } catch (e) {
    yield globalSagaCatcher(uiActions.getFooterLinksFailure, e);
  }
}

const uiSagas = [
  takeLatest(uiTypes.GET_MENUS_REQUEST, getMenusRequest),
  takeLatest(uiTypes.GET_FOOTER_LINKS_REQUEST, getFooterLinksRequest),
];

export default uiSagas;
