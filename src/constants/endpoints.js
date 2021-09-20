const apiBaseUri = process.env.REACT_APP_API_BASE_URI;

const api = {
  base: `${apiBaseUri}`,
};

const endpoints = {
  ARTICLES: {
    LIST: () => `${api.base}/articles`,
  },
};

export default endpoints;
