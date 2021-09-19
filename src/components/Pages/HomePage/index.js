import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { serializeObject } from 'helpers';
import articles from 'constants/articles';
import filters from 'constants/filters';

import { Container, Filters } from 'components/Globals';
import Article from 'components/Common/Article';
import Comment from 'components/Common/Comment';

import { Clients, Contact } from './partials';
import { StyledHomeWrapper, StyledArticlesWrapper } from './styles';

const HomePage = ({ className }) => {
  const history = useHistory();
  const handleFilterData = (selectedFilter) => {
    history.push(`?${serializeObject(selectedFilter)}`);
  };

  const lookup = {
    article: (article) => <Article article={article} key={article.id} />,
    comment: (comment) => (
      <Comment className="comment" comment={comment} key={comment.id} />
    ),
  };

  return (
    <StyledHomeWrapper className={className}>
      <Container>
        <Filters filters={filters} onChangeFilters={handleFilterData} />
        <StyledArticlesWrapper>
          {articles.map(
            ({ type, ...item }) =>
              lookup[type.toLowerCase()] && lookup[type.toLowerCase()](item),
          )}
        </StyledArticlesWrapper>
      </Container>
      <Clients />
      <Contact />
    </StyledHomeWrapper>
  );
};

HomePage.propTypes = {
  className: PropTypes.string,
};
HomePage.defaultProps = {
  className: '',
};

export default HomePage;
