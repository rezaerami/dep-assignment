import Styled from 'styled-components';
import { color } from 'helpers';

export const StyledCommentWrapper = Styled.article`
  flex: 1;
  padding: 8rem 0 0;
  color: ${color('black', 'dark')};
  border-top: solid 0.1rem ${color('white', 'dark')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > * {
    width: 76rem;
  }
`;

export const StyledCommentDescription = Styled.blockquote`
  font-size: 3.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: normal;
  margin: 0;
  max-width: 100%;
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
