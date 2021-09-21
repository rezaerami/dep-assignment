import Styled from 'styled-components';
import { color, makeRgba, viewport } from 'helpers';

export const StyledClientsWrapper = Styled.div`
  background-color: ${makeRgba(0.4, 'white', 'main')};
  color: color(${color('black', 'main')});
  text-align: center;
  padding: 4rem 0;
  @media (min-width: ${viewport('md')}) {
    padding: 8rem 0 10rem;
  }
`;

export const StyledTitle = Styled.h2`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  margin: 0;
  font-size: 3rem;
  @media (min-width: ${viewport('md')}) {
    font-size: 6rem;
  }
`;

export const StyledDescription = Styled.p`
  width: 56rem;
  max-width: 100%;
  margin: 1.8rem auto 6rem;
  font-family: Arial;
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: normal;
`;

export const StyledClientsLogoWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledClient = Styled.div`
  width: 50%;
  height: 12.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  @media (min-width: ${viewport('md')}) {
    width: 25%;
  }
`;

export const StyledClientLogo = Styled.img`
  max-width: 100%;
`;
