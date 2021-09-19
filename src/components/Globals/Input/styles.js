import Styled from 'styled-components';
import { color } from 'helpers';

export const StyledInputWrapper = Styled.div`
`;

export const StyledLabel = Styled.label`
  font-family: Arial;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: ${color('black', 'light')};
  display: block;
  margin-bottom: 1rem;
`;

export const StyledInput = Styled.input`
  font-family: Arial;
  font-size: 1.5rem;
  padding-bottom: 1rem;
  display: block;
  width: 100%;
  border: none;
  border-bottom: solid 0.1rem ${color('white', 'dark')};
`;

export const StyledError = Styled.div`
  font-family: Arial;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${color('red', 'main')};
  margin-top: 1rem;
`;
