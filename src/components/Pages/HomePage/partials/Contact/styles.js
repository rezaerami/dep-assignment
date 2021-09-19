import Styled from 'styled-components';

import { color } from 'helpers';
import { Container } from 'components/Globals';

export const StyledContactWrapper = Styled.div`
  padding: 8rem 0;
`;

export const StyledContainer = Styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledTitle = Styled.h3`
  font-size: 6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: ${color('black', 'main')};
  margin: 0;
  width: 20%;
`;

export const StyledForm = Styled.form`
  padding-left: 10rem;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const StyledInputWrapper = Styled.div`
  width: 50%;
  padding-right: 5rem;
  margin-bottom: 8rem;
  > .message {
    textarea {
      height: 10rem;
    }
  }
`;

export const StyledButtonWrapper = Styled.div`
  width: 100%;
`;
