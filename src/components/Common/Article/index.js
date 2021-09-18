import React from 'react';
import PropTypes from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import classNames from 'classnames';

import routes from 'constants/routes';
import MESSAGES from 'constants/messages';

import {
  StyledArticleImage,
  StyledArticleLink,
  StyledArticleTitle,
  StyledArticleSubTitle,
  StyledArticleWrapper,
  StyledArticleContent,
  StyledAdWrapper,
} from './style';

const Article = ({ article, className }) => {
  const renderArticle = ({ id, image, title, subtitle, ads = [] }) => {
    const link = generatePath(routes.articles, { id });
    return (
      <StyledArticleWrapper
        className={classNames(className, {
          'has-ads': !!ads.length,
        })}
      >
        <StyledArticleContent>
          <Link to={link}>
            <StyledArticleImage src={image} />
          </Link>
          <StyledArticleSubTitle>
            <Link to={link}>{subtitle}</Link>
          </StyledArticleSubTitle>
          <StyledArticleTitle>
            <Link to={link}>{title}</Link>
          </StyledArticleTitle>
          <StyledArticleLink to={link}>{MESSAGES.VIEW_CASE}</StyledArticleLink>
        </StyledArticleContent>
        {!!ads.length && (
          <StyledAdWrapper>
            {ads.map((ad) => renderArticle(ad))}
          </StyledAdWrapper>
        )}
      </StyledArticleWrapper>
    );
  };

  return renderArticle(article);
};

Article.propTypes = {
  className: PropTypes.string,
  article: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    ads: PropTypes.array,
  }).isRequired,
};

Article.defaultProps = {
  className: '',
};

export default Article;
