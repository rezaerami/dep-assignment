import Styled from 'styled-components';
import { color, viewport } from 'helpers';

export const StyledFooterWrapper = Styled.footer`
  background: ${color('black', 'main')};
  display: flex;
`;

export const StyledFooterMenuWrapper = Styled.div`
  color: ${color('white', 'light')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 0.2rem ${color('gray', 'dark')};
  padding: 4rem 0;
  @media (min-width: ${viewport('md')}) {
    padding: 8rem 2rem 2rem;
  }
  @media (min-width: ${viewport('xl')}) {
    padding-left: 0;
    padding-right: 0;
  }
  a {
    color: inherit;
  }
`;

export const StyledLogoWrapper = Styled.div`
  display: none;
  @media (min-width: ${viewport('md')}) {
    display: block;
  }
`;

export const StyledFooterMenus = Styled.div`
  flex: 1;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: ${viewport('md')}) {
    display: block;
    padding-left: 8rem;
  }
  @media (min-width: ${viewport('lg')}) {
    padding-left: 16rem;
  }
  a {
    line-height: 1.78;
    font-size: 3.2rem;
    @media (min-width: ${viewport('md')}) {
      font-size: 1.8rem;
    }
    &:not(: last-child) {
      margin-right 2.7rem;
    }
  }
`;

export const StyledSocialMedias = Styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${viewport('md')}) {
    display: block;
  }
  > * {
    &:not(:last-child){
      margin-bottom: 3rem;
      @media (min-width: ${viewport('md')}) {
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }
    svg {
      width: 3rem;
      height: 3rem;
      @media (min-width: ${viewport('md')}) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const StyledPolicyWrapper = Styled.div`
  font-family: Arial;
  font-size: 13px;
  line-height: 1;
  display: flex;
  color: ${color('gray', 'main')};
  padding: 3rem 0 4rem;
  flex-direction: column;
  @media (min-width: ${viewport('md')}) {
    align-items: flex-start;
    padding: 5rem 0 8rem;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledTerms = Styled.div`
  text-align: left;
  margin-bottom: 3rem;
  @media (min-width: ${viewport('md')}) {
    text-align: center;
    margin-bottom: 0;
  }
  flex: 1;
  span {
    display: block;
    margin-bottom: 1rem;
    @media (min-width: ${viewport('md')}) {
      margin-bottom: 0;
      margin-right: 5rem;
      display: inline-block;
    }
  }
  a {
    color: inherit;
  }
`;

export const StyledCopyright = Styled.div`
  text-align: left;
  @media (min-width: ${viewport('md')}) {
    text-align: right;
  }
`;

export const StyledGoToTop = Styled.div`
  background: ${color('white', 'light')};
  color: ${color('blue', 'main')};
  cursor: pointer;
  width: 12rem;
  font-size: 2.2rem;
  font-weight: normal;
  line-height: 1.45;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: none;
  @media (min-width: ${viewport('lg')}) {
    display: flex;
  }
`;
