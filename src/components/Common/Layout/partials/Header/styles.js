import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color } from 'helpers';
import { Container } from 'components/Globals';
import { Header } from 'resources/images';

export const StyledHeaderWrapper = Styled.header`
  background: url(${Header}) center center no-repeat scroll
    ${color('white', 'main')};
  background-size: cover;
  height: 94rem;
`;

export const StyledHeaderContainer = Styled(Container)`
  padding: 8rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const StyledTitle = Styled.h1`
  font-size: 40rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  margin: 0;
  text-align: left;
  margin-top: 11rem;
`;

export const StyledLink = Styled(Link)`
  width: 17rem;
  display: inline-block;
  padding: 0.8rem 0 1.2rem;
  background-color: ${color('black', 'main')};
  font-family: Arial;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: ${color('white', 'light')};
  align-self: flex-end
`;
