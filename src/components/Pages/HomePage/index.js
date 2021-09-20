import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import { articleActions, articleSelectors } from 'ducks';
import { serializeObject } from 'helpers';
import GLOBALS from 'constants/globals';
import MESSAGES from 'constants/messages';

import { Container, Filters } from 'components/Globals';
import Article from 'components/Common/Article';
import Comment from 'components/Common/Comment';

import { Clients, Contact } from './partials';
import {
  StyledHomeWrapper,
  StyledArticlesWrapper,
  StyledMessage,
} from './styles';

const HomePage = ({
  className,
  articlesList,
  getArticles,
  getArticlesApiStatus,
}) => {
  const history = useHistory();
  const { search } = useLocation();
  const {
    results: articles,
    metadata: { filters },
  } = articlesList;

  useEffect(() => {
    const params = new URLSearchParams(search);

    const work = params.get('work');
    const industry = params.get('industry');

    const payload = {};
    if (work) payload.work = work;
    if (industry) payload.industry = industry;

    getArticles(payload);
  }, [search]);

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
        {getArticlesApiStatus === GLOBALS.API_STATUSES.REQUEST &&
          !articles.length && <StyledMessage>{MESSAGES.LOADING}</StyledMessage>}

        {getArticlesApiStatus === GLOBALS.API_STATUSES.SUCCESS &&
          !articles.length && (
            <StyledMessage>{MESSAGES.NO_RESULT}</StyledMessage>
          )}

        <StyledArticlesWrapper>
          {!!articles.length &&
            articles.map(
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
  articlesList: PropTypes.object,
  getArticles: PropTypes.func,
  getArticlesApiStatus: PropTypes.string,
};
HomePage.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => ({
  articlesList: articleSelectors.getList(state),
  getArticlesApiStatus: articleSelectors.getArticlesApiStatus(state),
});

export default connect(mapStateToProps, {
  getArticles: articleActions.getArticlesRequest,
})(HomePage);
