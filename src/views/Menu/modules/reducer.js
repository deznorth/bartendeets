import { handleActions } from 'redux-actions';
import * as actions from './actions';

const INITIAL_STATE = {
  exampleResponse: null,
};

export default handleActions({
  [actions.initialized]: (state, { payload }) => ({
    ...state,
    exampleResponse: payload,
  }),
}, INITIAL_STATE);
