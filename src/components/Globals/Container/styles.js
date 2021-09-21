import Styled from 'styled-components';
import { viewport } from 'helpers';

export const StyledContainer = Styled.div`
  width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;

  max-width: calc(100% - 4rem);
  @media (min-width: ${viewport('xl')}) {
    max-width: 100%;
  }
`;
