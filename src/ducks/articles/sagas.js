import { put, takeLatest } from 'redux-saga/effects';

import { callService, globalSagaCatcher } from 'helpers';
import { articleActions, articleServices, articleTypes } from 'ducks';

function* getArticles(action) {
  const { payload: params } = action;
  try {
    const response = yield callService(articleServices.getArticles, { params });
    yield put(articleActions.getArticlesSuccess(response.data));
  } catch (e) {
    yield globalSagaCatcher(articleActions.getArticlesFailure, e);
  }
}

const articleSagas = [
  takeLatest(articleTypes.GET_ARTICLES_REQUEST, getArticles),
];

export default articleSagas;
