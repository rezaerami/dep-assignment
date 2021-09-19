import Styled from 'styled-components';
import { color } from 'helpers';

export const StyledCommentWrapper = Styled.article`
  flex: 1;
  padding: 8rem 23rem 0;
  color: ${color('black', 'dark')};
  border-top: solid 0.1rem ${color('white', 'dark')};
`;

export const StyledCommentDescription = Styled.blockquote`
  font-size: 3.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: normal;
  margin: 0;
`;

export const StyledCommentAuthor = Styled.h4`
  margin: 2rem 0 0;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.31;
  letter-spacing: normal;
  font-family: Arial;
  font-size: 1.3rem;
`;
