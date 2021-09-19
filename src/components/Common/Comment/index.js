import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  StyledCommentWrapper,
  StyledCommentDescription,
  StyledCommentAuthor,
} from './style';

const Comment = ({ comment, className }) => {
  const { description, author } = comment;
  return (
    <StyledCommentWrapper className={classNames(className)}>
      <StyledCommentDescription>{description}</StyledCommentDescription>
      <StyledCommentAuthor>{author}</StyledCommentAuthor>
    </StyledCommentWrapper>
  );
};

Comment.propTypes = {
  className: PropTypes.string,
  comment: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

Comment.defaultProps = {
  className: '',
};

export default Comment;
