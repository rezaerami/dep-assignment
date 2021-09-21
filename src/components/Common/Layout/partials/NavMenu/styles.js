import Styled from 'styled-components';
import { color, viewport } from 'helpers';

import { Container } from 'components/Globals';

export const StyledNavMenuWrapper = Styled.nav`
  width: 100%;
  color: ${color('black', 'main')};
  transition: all 0.15s ease-in 0s;
  background-color: ${color('white', 'light')};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  @media (min-width: ${viewport('md')}) {
    background-color: transparent;
  }

  &.active {
    background-color: ${color('white', 'light')};
    > * {
      border: none;
    }
  }

  &.is-mega-menu-open {
    background-color: ${color('black', 'main')};
    color: ${color('white', 'light')};
  }
`;

export const StyledNavMenuContent = Styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 0;
  height: 5rem;
  @media (min-width: ${viewport('md')}) {
    height: 8rem;
  }

  @media (min-width: ${viewport('md')}) {
    align-items: flex-end;
    padding: 2.4rem 0;
    border-bottom: solid 0.1rem ${color('black', 'main')};
  }

  a {
    color: inherit;
    svg {
      width: 5rem;
      @media (min-width: ${viewport('md')}) {
        width: 10rem;
      }
    }
  }
`;

export const StyledMenuButton = Styled.button`
  background: none;
  border: none;
  outline: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: inherit;

  > span {
    margin-right: 2.6rem;
    padding-top: 0.2rem;
    font-size: 1.8rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    letter-spacing: normal;
  }
`;
