import Styled from 'styled-components';

import { color, viewport } from 'helpers';
import { Container } from 'components/Globals';
import Header from 'resources/images/Header.jpg';

export const StyledHeaderWrapper = Styled.header`
  background: url(${Header}) center center no-repeat scroll
    ${color('white', 'main')};
  background-size: cover;

  @media (min-width: ${viewport('md')}) {
    height: 94rem;
  }
`;

export const StyledHeaderContainer = Styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  padding: 8rem 0 0;
  max-width: 100%;
  @media (min-width: ${viewport('md')}) {
    padding: 8rem 0;
    max-width: calc(100% - 4rem);
  }
`;

export const StyledTitle = Styled.h1`
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  margin: 0;

  font-size: 17.8rem;
  text-align: center;

  margin: 8rem 0;
  @media (min-width: ${viewport('md')}) {
    margin-top: 11rem;
    margin-bottom: 0;
    font-size: 30rem;
    text-align: left;
  }
  @media (min-width: ${viewport('lg')}) {
    font-size: 40rem;
  }
`;

export const StyledButtonWrapper = Styled.header`
  text-align: center;
  padding: 2rem;
  background-color: ${color('white', 'light')};
  a {
    width: 100%;
  }

  @media (min-width: ${viewport('md')}) {
    text-align: right;
    background-color: unset;
    padding: 0;
    a {
      width: 17rem;
    }
  }
`;
