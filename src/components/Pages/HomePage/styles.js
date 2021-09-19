import Styled from 'styled-components';

export const StyledHomeWrapper = Styled.div``;

export const StyledArticlesWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem 8rem;;
  > * {
    margin-top: 8rem;
    flex: 1;
    min-width: 50%;
    padding: 0 1.5rem;
    &.has-ads, &.comment {
      min-width: 100%;
    }
  }
`;
