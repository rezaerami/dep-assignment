import React from 'react';
import PropTypes from 'prop-types';

import articles from 'constants/articles';

import Article from 'components/Common/Article';
import Comment from 'components/Common/Comment';

import { Container } from 'components/Globals';
import { StyledHomeWrapper, StyledArticlesWrapper } from './styles';

const HomePage = ({ className }) => {
  const lookup = {
    article: (article) => <Article article={article} key={article.id} />,
    comment: (comment) => <Comment comment={comment} key={comment.id} />,
  };

  return (
    <StyledHomeWrapper className={className}>
      <Container>
        <StyledArticlesWrapper>
          {articles.map(
            ({ type, ...item }) =>
              lookup[type.toLowerCase()] && lookup[type.toLowerCase()](item),
          )}
        </StyledArticlesWrapper>
      </Container>
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
