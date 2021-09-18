import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from 'helpers';

export const StyledArticleWrapper = Styled.div`
  &.has-ads {
    display: flex;
    > article {
      width: 66%;
    }
  }
  a {
    color: inherit;
  }
`;

export const StyledArticleContent = Styled.article`
`;

export const StyledArticleImage = Styled.img`
  width: 100%;
`;

export const StyledArticleTitle = Styled.h3`
  margin: 1.2rem 0 1.4rem 0;
  font-size: 3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  color: ${color('black', 'light')}
`;

export const StyledArticleSubTitle = Styled.h4`
  margin: 1.8rem 0 1.2rem 0;
  font-family: Arial;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: ${color('gray', 'main')};
`;

export const StyledArticleLink = Styled(Link)`
  font-family: Arial;
  font-size: 1.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: ${color('blue', 'main')} !important;
`;

export const StyledAdWrapper = Styled.div`
  width: 33%;
  padding-left: 3rem;
  > * {
    border-bottom: 0.1rem solid ${color('white', 'dark')};
    padding-bottom: 8rem;
    &:first-child {
      border-top: 0.1rem solid ${color('white', 'dark')};
    }
  }
`;
