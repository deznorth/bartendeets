import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { storeCreator } from './util/storeCreator';
import { Root } from './app/root';
import sagas from './app/sagas';
import * as reducers from './app/reducers';

const history = createBrowserHistory();

const reduxStore = storeCreator({
  initialState: {},
  reducers,
  sagas,
  history,
});

render(
  <React.StrictMode>
    <Root store={reduxStore} history={history} />
  </React.StrictMode>,
  document.getElementById('root')
);
