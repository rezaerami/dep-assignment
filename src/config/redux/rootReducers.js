import {
  coreReducers,
  loadingReducers,
  messageReducers,
  articleReducers,
  uiReducers,
  clientReducers,
} from 'ducks';

const rootReducers = {
  core: coreReducers,
  loading: loadingReducers,
  message: messageReducers,
  articles: articleReducers,
  ui: uiReducers,
  clients: clientReducers,
};

export default rootReducers;
