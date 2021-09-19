import Styled from 'styled-components';
import { color, makeRgba } from 'helpers';

export const StyledClientsWrapper = Styled.div`
  background-color: ${makeRgba(0.4, 'white', 'main')};
  padding: 8rem 0 10rem;
  color: color(${color('black', 'main')});
  text-align: center;
`;

export const StyledTitle = Styled.h2`
  font-size: 6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  margin: 0;
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
  width: 25%;
  height: 12.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const StyledClientLogo = Styled.img``;
