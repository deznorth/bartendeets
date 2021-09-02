import { handleActions } from 'redux-actions';
import * as actions from './actions';

const INITIAL_STATE = {
  loading: false,
  drinks: [],
};

export default handleActions({
  [actions.fetchingDrinks]: state => ({
    ...state,
    loading: true,
  }),
  [actions.fetchedDrinks]: (state, { payload }) => ({
    ...state,
    loading: false,
    drinks: payload ?? [],
  }),
}, INITIAL_STATE);
