import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';

import { clientActions, clientSelectors } from 'ducks/client';

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

const Clients = ({ className, getClients, clients }) => {
  useEffect(() => {
    getClients();
  }, []);
  return (
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
};

Clients.propTypes = {
  className: PropTypes.string,
  clients: PropTypes.array,
  getClients: PropTypes.func,
};
Clients.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => ({
  clients: clientSelectors.getListResults(state),
});

export default connect(mapStateToProps, {
  getClients: clientActions.getClientsRequest,
})(Clients);
