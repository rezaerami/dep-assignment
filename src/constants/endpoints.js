const apiBaseUri = process.env.REACT_APP_API_BASE_URI;

const api = {
  base: `${apiBaseUri}`,
};

const endpoints = {
  ARTICLES: {
    LIST: () => `${api.base}/articles`,
  },
  CLIENTS: {
    LIST: () => `${api.base}/clients`,
  },
  UI: {
    MENUS: () => `${api.base}/menus`,
    FOOTER_LINKS: () => `${api.base}/footer-links`,
  },
};

export default endpoints;
