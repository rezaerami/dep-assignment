import endpoints from 'constants/endpoints';

const articlesServices = {
  getArticles: ({ params }) => ({
    url: endpoints.ARTICLES.LIST(),
    method: 'GET',
    params,
  }),
};

export default articlesServices;
