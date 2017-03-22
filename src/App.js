import React, { Component } from 'react';
import './App.css';

import {clients, viewData } from './data'

import ClientList from './ClientList/ClientList'
import GoogleAuthy from './GoogleAPI/GoogleAuthy'
import MonthHeader from './MonthHeader'

class App extends Component {
  render() {
    var list = Object.keys(clients).map(id => clients[id])

    return (
      <div className="App">
        <MonthHeader monthsToDisplay={viewData.monthsToDisplay} />
        <ClientList list={list} />
        <GoogleAuthy />
      </div>
    );
  }
}

export default App;
