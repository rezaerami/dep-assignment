import { HomePage } from 'components/Pages';
import routes from 'constants/routes';

import Layout from 'components/Common/Layout';

const routers = [
  {
    path: routes.home,
    exact: true,
    component: HomePage,
    layout: Layout,
  },
];

export default routers;
