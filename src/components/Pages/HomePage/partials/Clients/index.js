import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';

import MESSAGES from 'constants/messages';
import routes from 'constants/routes';

import { Container } from 'components/Globals';

import {
  StyledClientsWrapper,
  StyledTitle,
  StyledDescription,
  StyledClientsLogoWrapper,
  StyledClient,
  StyledClientLogo,
} from './styles';

const clients = [];

const Clients = ({ className }) => (
  <StyledClientsWrapper className={classNames(className)}>
    <Container>
      <StyledTitle>{MESSAGES.CLIENTS}</StyledTitle>
      <StyledDescription>{MESSAGES.CLIENTS_DESCRIPTION}</StyledDescription>
      <StyledClientsLogoWrapper>
        {clients.map(({ id, image }) => (
          <StyledClient key={id}>
            <Link to={generatePath(routes.clients, { id })}>
              <StyledClientLogo src={image} />
            </Link>
          </StyledClient>
        ))}
      </StyledClientsLogoWrapper>
    </Container>
  </StyledClientsWrapper>
);

Clients.propTypes = {
  className: PropTypes.string,
};
Clients.defaultProps = {
  className: '',
};

export default Clients;
