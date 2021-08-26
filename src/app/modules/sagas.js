import { takeEvery } from "redux-saga/effects";
import * as actions from './actions';

function* authenticate() {
  yield console.log('test');
}

const sagas = [
  takeEvery(actions.authenticate, authenticate),
];

export default sagas;