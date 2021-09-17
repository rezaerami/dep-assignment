import { coreReducers, loadingReducers, messageReducers } from 'ducks';

const rootReducers = {
  core: coreReducers,
  loading: loadingReducers,
  message: messageReducers,
};

export default rootReducers;
