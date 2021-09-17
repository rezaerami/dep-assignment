import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import initialState from './initialState';
import configureReducers from './configureReducers';
import configureSaga from './configureSaga';
import rootReducers from './rootReducers';

const configureStore = () => {
  const reducers = configureReducers(rootReducers);
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  /* eslint-disable indent */
  const composeEnhancers =
    process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: 'Mozapic',
          actionsBlacklist: ['REDUX_STORAGE_SAVE'],
        })
      : compose;
  /* eslint-enable indent */

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(configureSaga);

  return store;
};

export default configureStore;
