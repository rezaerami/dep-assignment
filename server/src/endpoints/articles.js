const articles = require('../mocks/articles');

const getArticles = (req) => {
  const { query } = req;

  const workFilters = [
    ...new Set(
      articles.filter(({ type }) => type === 'ARTICLE').map(({ work }) => work),
    ),
  ].map((work) => ({
    title: work,
    value: work,
  }));

  const industryFilters = [
    ...new Set(
      articles
        .filter(({ type }) => type === 'ARTICLE')
        .map(({ industry }) => industry),
    ),
  ].map((industry) => ({
    title: industry,
    value: industry,
  }));

  workFilters.unshift({
    title: 'All Works',
    value: null,
  });

  industryFilters.unshift({
    title: 'All Industries',
    value: null,
  });

  const filters = [
    {
      type: 'select',
      name: 'work',
      label: 'Show Me',
      children: workFilters,
    },
    {
      type: 'select',
      name: 'industry',
      label: 'In',
      children: industryFilters,
    },
  ];

  let filteredArticles = articles;
  if (query && query.work) {
    filteredArticles = filteredArticles.filter(
      (article) => article.work === query.work,
    );
  }
  if (query && query.industry) {
    filteredArticles = filteredArticles.filter(
      (article) => article.industry === query.industry,
    );
  }
  return {
    metadata: {
      filters,
    },
    results: filteredArticles,
  };
};

module.exports = getArticles;
