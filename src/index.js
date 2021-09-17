import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from 'config/redux/configureStore';
import HOC from 'components/Common/HOC';

const MOUNT_NODE = document.getElementById('root');
let store = configureStore();

const render = () => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <Router>
        <HOC />
      </Router>
    </ReduxProvider>,
    MOUNT_NODE,
  );
};
render();

if (module.hot) {
  module.hot.accept('components/Common/HOC', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
  module.hot.accept('config/redux/configureStore', () => {
    store = configureStore();
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
