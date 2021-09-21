import Styled from 'styled-components';

import { color, viewport } from 'helpers';
import { Container } from 'components/Globals';

export const StyledContactWrapper = Styled.div`
  padding: 4rem 0;
  @media (min-width: ${viewport('lg')}) {
    padding: 8rem 0;
  }
`;

export const StyledContainer = Styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media (min-width: ${viewport('lg')}) {
    flex-direction: row;
  }
`;

export const StyledTitle = Styled.h3`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: ${color('black', 'main')};
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  @media (min-width: ${viewport('lg')}) {
  font-size: 6rem;
    margin-bottom: 0;
    width: 20%;
    text-align: left;
  }
`;

export const StyledForm = Styled.form`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding-right: 2rem;
  padding-left: 2rem;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${viewport('lg')}) {
    padding-right: 0;
    padding-left: 10rem;
    flex-direction: row;
  }
`;

export const StyledInputWrapper = Styled.div`
  margin-bottom: 2.8rem;
  width: 100%;
  @media (min-width: ${viewport('lg')}) {
    margin-bottom: 8rem;
    width: 50%;
    padding-right: 5rem;
  }
  > .message {
    textarea {
      height: 10rem;
    }
  }
`;

export const StyledButtonWrapper = Styled.div`
  width: 100%;
`;
