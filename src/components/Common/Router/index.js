import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import routers from 'components/Common/Router/constants/routers';

const Router = () => {
  const pages = routers.map(
    ({ layout: Layout = Fragment, component: Component, ...route }) => (
      <Route
        key={`${route.path.replace(/\//g, '_')}_${route.exact && 'exact'}`}
        render={(props) => (
          <Layout>
            <Component props={props} />
          </Layout>
        )}
        {...route}
      />
    ),
  );

  return <Switch>{pages}</Switch>;
};

export default Router;
