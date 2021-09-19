import Styled from 'styled-components';
import { color } from 'helpers';

export const StyledButton = Styled.button`
  width: 17rem;
  display: inline-block;
  padding: 0.8rem 0 1.2rem;
  font-family: Arial;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  align-self: flex-end;
  border: none;
  background-color: ${(props) => color(props.status, 'main')(props)};
  color: ${(props) => color(props.color, 'light')(props)};
`;
