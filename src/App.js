import React, { Component } from 'react';
import './App.css';

import data from './data'

import ClientList from './ClientList/ClientList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClientList clients={data.clientList} />
      </div>
    );
  }
}

export default App;
