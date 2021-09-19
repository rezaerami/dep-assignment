import Styled from 'styled-components';
import { color } from 'helpers';

export const StyledFooterWrapper = Styled.footer`
  background: ${color('black', 'main')};
  display: flex;
`;

export const StyledFooterMenuWrapper = Styled.div`
  color: ${color('white', 'light')};
  padding: 8rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 0.2rem ${color('gray', 'dark')};
  a {
    color: inherit;
  }
`;

export const StyledLogoWrapper = Styled.div``;

export const StyledFooterMenus = Styled.div`
  flex: 1;
  padding-left: 16rem;
  a {
    line-height: 1.78;
    font-size: 1.8rem;
    &:not(: last-child) {
      margin-right 2.7rem;
    }
  }
`;

export const StyledSocialMedias = Styled.div`
  > * {
    &:not(:last-child){
      margin-right: 2rem;
    }
  }
`;

export const StyledPolicyWrapper = Styled.div`
  padding: 5rem 0 8rem;
  font-family: Arial;
  font-size: 13px;
  line-height: 1;
  display: flex;
  align-items: center;
  color: ${color('gray', 'main')};
`;

export const StyledTerms = Styled.div`
  text-align: center;
  flex: 1;
  span {
    margin-right: 5rem;
  }
  a {
    color: inherit;
  }
`;

export const StyledCopyright = Styled.div`
  text-align: right;
`;

export const StyledGoToTop = Styled.div`
  background: ${color('white', 'light')};
  color: ${color('blue', 'main')};
  cursor: pointer;
  width: 12rem;
  font-size: 2.2rem;
  font-weight: normal;
  line-height: 1.45;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
