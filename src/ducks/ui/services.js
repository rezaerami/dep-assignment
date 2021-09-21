import endpoints from 'constants/endpoints';

const uiServices = {
  getMenus: ({ params }) => ({
    url: endpoints.UI.MENUS(),
    method: 'GET',
    params,
  }),
  getFooterLinks: ({ params }) => ({
    url: endpoints.UI.FOOTER_LINKS(),
    method: 'GET',
    params,
  }),
};

export default uiServices;
