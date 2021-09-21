import { createSelector } from 'reselect';

import { createActionStatusSelector } from 'ducks/loading/selectors';
import articleActions from './actions';

const getArticles = (state) => state.articles;
const getList = createSelector(getArticles, (articles) => articles.list);
const getListMetadata = createSelector(getList, (list) => list.metadata);
const getListResults = createSelector(getList, (list) => list.results);

const getArticlesApiStatus = createActionStatusSelector(
  articleActions.getArticlesRequest,
);

const coreSelectors = {
  getArticles,
  getList,
  getListMetadata,
  getListResults,

  getArticlesApiStatus,
};

export default coreSelectors;
