import { createAction } from 'redux-actions';

const base = 'menu/';
const makeAction = action => createAction(`${base}${action}`);

// Shared actions (used by sagas and reducers)
export const fetchingDrinks = makeAction('FETCHING_DRINKS');
export const fetchedDrinks = makeAction('FETCHED_DRINKS');

// Saga-only actions
export const fetchDrinks = makeAction('FETCH_DRINKS');
