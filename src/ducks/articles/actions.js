import { createAction } from 'helpers/reduxHelpers';
import articlesTypes from './types';

const coreActions = {
  getArticlesRequest: createAction(articlesTypes.GET_ARTICLES_REQUEST),
  getArticlesSuccess: createAction(articlesTypes.GET_ARTICLES_SUCCESS),
  getArticlesFailure: createAction(articlesTypes.GET_ARTICLES_FAILURE),
};

export default coreActions;
