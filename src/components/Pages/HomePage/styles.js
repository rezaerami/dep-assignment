import Styled from 'styled-components';
import { viewport } from 'helpers';

export const StyledHomeWrapper = Styled.div``;

export const StyledMessage = Styled.p`
  margin: 0;
  padding: 10rem 0;
  font-size: 5rem;
  text-align: center;
`;

export const StyledArticlesWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem 8rem;;
  > * {
    margin-top: 3rem;
    flex: 1;
    min-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media (min-width: ${viewport('md')}) {
      margin-top: 8rem;
      min-width: 50%;
    }

    &.has-ads, &.comment {
      min-width: 100%;
    }
  }
`;
