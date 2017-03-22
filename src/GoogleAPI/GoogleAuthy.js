import React, { Component } from 'react';

import API from './API'

import ctrl from '../Controller.js'

class GoogleAuthy extends Component {

  signIn() {
    ctrl.broadcast('GOOGLE_SIGNIN');
  }

  signOut() {
    ctrl.broadcast('GOOGLE_SIGNOUT');
  }

  render() {
    var action;
    if (!API.isLoaded) {
      action = <div>Loading...</div>
    } else {
      if (API.isSignedIn) {
        action = <div><button onClick={this.signOut}>Sign Out</button> check js console</div>
      } else {
        action = <button onClick={this.signIn}>Sign In</button>
      }
    }

    return (
      <div>
        Do All Da Google!
        {action}
      </div>
    );
  }
}

export default GoogleAuthy;
