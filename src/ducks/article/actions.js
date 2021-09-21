import { createAction } from 'helpers/reduxHelpers';
import articleTypes from './types';

const coreActions = {
  getArticlesRequest: createAction(articleTypes.GET_ARTICLES_REQUEST),
  getArticlesSuccess: createAction(articleTypes.GET_ARTICLES_SUCCESS),
  getArticlesFailure: createAction(articleTypes.GET_ARTICLES_FAILURE),
};

export default coreActions;
