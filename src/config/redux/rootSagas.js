import coreSagas from 'ducks/core/sagas';
import messageSagas from 'ducks/message/sagas';

const rootSagas = [...coreSagas, ...messageSagas];

export default rootSagas;
