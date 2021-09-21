import Styled from 'styled-components';
import { color, makeRgba, viewport, zIndex } from 'helpers';

export const StyledMegaMenuWrapper = Styled.div`
  background: ${color('black', 'main')};
  z-index: ${zIndex('high')};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow-y: auto;
  top: 5rem;
  @media (min-width: ${viewport('md')}) {
    top: 8rem;
  }

  a {
    color: inherit;
  }
`;

export const StyledMenuWrapper = Styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`;

export const StyledMenuItem = Styled.li`
  position: relative;
  color: ${color('white', 'light')};
  padding: 0.8rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row-reverse;
  &:not(:last-child){
    > span {
      border-bottom: solid 0.1rem ${makeRgba(0.5, 'gray', 'light')};
    }
  }
`;

export const StyledMenuTitle = Styled.span`
  flex: 1;
  text-align: right;

  > a {
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: right;
    font-size: 5rem;
    @media (min-width: ${viewport('md')}) {
      font-size: 11rem;
    }
  }
`;

export const StyledSubMenuWrapper = Styled(StyledMenuWrapper)`
  display: none;
  @media (min-width: ${viewport('md')}) {
    display: block;
  }
`;

export const StyledSubMenuItem = Styled.li`
  > a {
    font-family: Arial;
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
  }
`;
