import { createSelector } from 'reselect';

import { createActionStatusSelector } from 'ducks/loading/selectors';
import clientActions from './actions';

const getClients = (state) => state.clients;
const getList = createSelector(getClients, (clients) => clients.list);
const getListMetadata = createSelector(getList, (list) => list.metadata);
const getListResults = createSelector(getList, (list) => list.results);

const getClientsApiStatus = createActionStatusSelector(
  clientActions.getClientsRequest,
);

const coreSelectors = {
  getClients,
  getList,
  getListMetadata,
  getListResults,

  getClientsApiStatus,
};

export default coreSelectors;
