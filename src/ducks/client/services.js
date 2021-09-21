import endpoints from 'constants/endpoints';

const clientsServices = {
  getClients: ({ params }) => ({
    url: endpoints.CLIENTS.LIST(),
    method: 'GET',
    params,
  }),
};

export default clientsServices;
