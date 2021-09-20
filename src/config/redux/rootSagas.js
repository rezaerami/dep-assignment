import coreSagas from 'ducks/core/sagas';
import messageSagas from 'ducks/message/sagas';
import articleSagas from 'ducks/articles/sagas';

const rootSagas = [...coreSagas, ...messageSagas, ...articleSagas];

export default rootSagas;
