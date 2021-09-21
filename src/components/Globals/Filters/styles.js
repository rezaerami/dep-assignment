import Styled from 'styled-components';
import { color, viewport } from 'helpers';

export const StyledFiltersWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;

  @media (min-width: ${viewport('md')}) {
    margin-top: 6rem;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;
    }
  }
`;

export const StyledSelectWrapper = Styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.07;
  &:not(:last-child){
    margin-bottom: 2rem;
    @media (min-width: ${viewport('md')}) {
      margin-right: 2.4rem;
    }
  }
`;

export const StyledSelectTitle = Styled.label`
  color: ${color('gray', 'light')};
  margin-right: 0.5rem;
  font-weight: 400;
`;

export const StyledSelect = Styled.select`
  color: ${color('black', 'main')};
  border: none;
  font-size: inherit;
  border-bottom: solid 0.1rem;
  height: 3.8rem;
  padding: 0;
  font-weight: 500;
  option {
    font-family: Arial;
    font-size: 1.5rem;
  }
`;
