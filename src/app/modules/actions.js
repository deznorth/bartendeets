import { createAction } from 'redux-actions';

const base = 'shared/';
const makeAction = action => createAction(`${base}${action}`);

// Shared actions (used by sagas and reducers)
export const authenticating = makeAction('AUTHENTICATING');
export const authenticated = makeAction('AUTHENTICATED');

// Saga-only actions
export const authenticate = makeAction('authenticate');