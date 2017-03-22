import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ctrl from './Controller.js'

function fullRender() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

fullRender();
ctrl.subscribe(fullRender);