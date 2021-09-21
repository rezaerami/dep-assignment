import { createAction } from 'helpers/reduxHelpers';
import clientTypes from './types';

const coreActions = {
  getClientsRequest: createAction(clientTypes.GET_CLIENTS_REQUEST),
  getClientsSuccess: createAction(clientTypes.GET_CLIENTS_SUCCESS),
  getClientsFailure: createAction(clientTypes.GET_CLIENTS_FAILURE),
};

export default coreActions;
