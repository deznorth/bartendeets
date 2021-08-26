import { all } from 'redux-saga/effects';
import sharedSagas from './modules/sagas';
import viewSagas from '../views/sagas';

export default function* rootSaga() {
  yield all([
    ...sharedSagas,
    ...viewSagas,
  ]);
}