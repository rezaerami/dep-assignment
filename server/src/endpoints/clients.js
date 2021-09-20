const clients = require('../mocks/clients');

const getClients = () => ({
  metadata: {},
  results: clients,
});

module.exports = getClients;
