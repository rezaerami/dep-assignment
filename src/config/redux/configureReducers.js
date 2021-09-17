import { combineReducers } from 'redux';

const configureReducers = (rootReducers) =>
  combineReducers({
    ...rootReducers,
  });
export default configureReducers;
