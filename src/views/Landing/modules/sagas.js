import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from './actions';
import proxies from '../../../util/proxies';

function* init() {
  yield console.log('test from landing');
  const response = yield call(proxies.getExample);
  yield put(actions.initialized(response.data));
}

const sagas = [
  takeEvery(actions.init, init),
];

export default sagas;