import { handleActions } from 'redux-actions';
import * as actions from './actions';

const INITIAL_STATE = {
  currentUser: null,
};

export default handleActions({
  [actions.authenticating]: (state) => ({
    ...state,
    currentUser: null,
  }),
  [actions.authenticated]: (state, { payload }) => ({
    ...state,
    currentUser: payload,
  }),
}, INITIAL_STATE);
