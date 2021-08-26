import { createAction } from 'redux-actions';

const base = 'menu/';
const makeAction = action => createAction(`${base}${action}`);

// Shared actions (used by sagas and reducers)
export const initialized = makeAction('INITIALIZED');

// Saga-only actions
export const init = makeAction('INIT');
