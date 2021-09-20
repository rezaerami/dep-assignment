import {
  coreReducers,
  loadingReducers,
  messageReducers,
  articleReducers,
} from 'ducks';

const rootReducers = {
  core: coreReducers,
  loading: loadingReducers,
  message: messageReducers,
  articles: articleReducers,
};

export default rootReducers;
