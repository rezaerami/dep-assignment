import coreSagas from 'ducks/core/sagas';
import messageSagas from 'ducks/message/sagas';
import articleSagas from 'ducks/article/sagas';
import uiSagas from 'ducks/ui/sagas';
import clientSagas from 'ducks/client/sagas';

const rootSagas = [
  ...coreSagas,
  ...messageSagas,
  ...articleSagas,
  ...uiSagas,
  ...clientSagas,
];

export default rootSagas;
