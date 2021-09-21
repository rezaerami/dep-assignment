import Styled from 'styled-components';
import { color, makeRgba, viewport, zIndex } from 'helpers';

export const StyledMegaMenuWrapper = Styled.div`
  background: ${color('black', 'main')};
  z-index: ${zIndex('high')};
  position: fixed;
  animation fadeIn 0.1s ease-in both;
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
  animation fadeIn 0.3s ease-in ${(props) => props.index * 0.1}s both;
  &:not(:last-child){
    > span {
      border-bottom: solid 0.1rem ${makeRgba(0.5, 'gray', 'light')};
    }
  }
`;

export const StyledMenuTitle = Styled.span`
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
  > svg {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 4rem;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.1s ease 0s;
  }
  &:hover {
    > svg {
      opacity: 1;
      transform: translateX(0);
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
  display: flex;
  align-items: center;
  transform: translateX(-1.7rem);
  transition: all 0.1s ease 0s;
  animation fadeIn 0.3s ease-in ${(props) => props.index * 0.1}s both;
  &.selected {
    color: ${color('gray', 'light')};
  }

  > a {
    font-family: Arial;
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
  }
  > svg {
    margin-right: 1rem;
    opacity: 0;
    transform: translateX(-100%);
    transition: inherit;
  }
  &:hover {
    transform: translateX(0);
    > svg {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
