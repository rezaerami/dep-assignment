import Styled from 'styled-components';

export const StyledContainer = Styled.div`
  width: ${(props) => props.theme.containerWidth};
  max-width: 100%;
  margin: 0 auto;
`;
