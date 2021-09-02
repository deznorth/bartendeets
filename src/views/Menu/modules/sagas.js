import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from './actions';
import proxies from '../../../util/proxies';

function* getDrinks() {
  yield put(actions.fetchingDrinks());
  const response = yield call(proxies.getDrinks);
  yield put(actions.fetchedDrinks(response.data));
}

const sagas = [
  takeEvery(actions.fetchDrinks, getDrinks),
];

export default sagas;