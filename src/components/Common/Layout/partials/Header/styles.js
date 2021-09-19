import Styled from 'styled-components';

import { color } from 'helpers';
import { Container } from 'components/Globals';
import Header from 'resources/images/Header.jpg';

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
