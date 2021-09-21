import { createSelector } from 'reselect';

import { createActionStatusSelector } from 'ducks/loading/selectors';
import articleActions from './actions';

const getUi = (state) => state.ui;

const getMenus = createSelector(getUi, (ui) => ui.menus);
const getMenusMetadata = createSelector(getMenus, (list) => list.metadata);
const getMenusResults = createSelector(getMenus, (list) => list.results);

const getFooterLinks = createSelector(getUi, (ui) => ui.footerLinks);
const getFooterLinksMetadata = createSelector(
  getFooterLinks,
  (list) => list.metadata,
);
const getFooterLinksResults = createSelector(
  getFooterLinks,
  (list) => list.results,
);

const getMenusApiStatus = createActionStatusSelector(
  articleActions.getMenusRequest,
);
const getFooterLinksApiStatus = createActionStatusSelector(
  articleActions.getFooterLinksRequest,
);

const coreSelectors = {
  getUi,
  getMenus,
  getMenusResults,
  getMenusMetadata,
  getFooterLinks,
  getFooterLinksResults,
  getFooterLinksMetadata,

  getMenusApiStatus,
  getFooterLinksApiStatus,
};

export default coreSelectors;
