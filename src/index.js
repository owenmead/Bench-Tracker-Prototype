import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Store/Reducers/index.js';
import App from './App';
import API from './GoogleAPI/API'
import { google_authchange, google_sheets_api_ready, init_main_view } from './Store/Actions/index.js'

import './index.css';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

API.listenAuthChange(isSignedIn => {
  store.dispatch(google_authchange(isSignedIn, API.getProfile))
});
API.init(() => {
  store.dispatch(google_sheets_api_ready())
  store.dispatch(init_main_view())
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)