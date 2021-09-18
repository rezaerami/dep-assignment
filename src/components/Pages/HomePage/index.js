import React from 'react';
import PropTypes from 'prop-types';

import articles from 'constants/articles';

import Article from 'components/Common/Article';

import { Container } from 'components/Globals';
import { StyledHomeWrapper, StyledArticlesWrapper } from './styles';

const HomePage = ({ className }) => (
  <StyledHomeWrapper className={className}>
    <Container>
      <StyledArticlesWrapper>
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </StyledArticlesWrapper>
    </Container>
  </StyledHomeWrapper>
);

HomePage.propTypes = {
  className: PropTypes.string,
};
HomePage.defaultProps = {
  className: '',
};

export default HomePage;
