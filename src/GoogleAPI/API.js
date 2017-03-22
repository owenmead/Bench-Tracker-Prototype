
import gapi from './google_api'
import ctrl from '../Controller.js'

ctrl.subscribe((eventName, data) => {
  switch(eventName) {
    case 'GOOGLE_SIGNIN':
      gapi.auth2.getAuthInstance().signIn();
      break;
    case 'GOOGLE_SIGNOUT':
      gapi.auth2.getAuthInstance().signOut();
      break;
    case 'GOOGLE_AUTHCHANGE':
      if (data.isSignedIn) {
        listMajors();
      } else {
        // document.getElementById('content').innerHTML = 'All Gone';
      }
      break;

    case 'GOOGLE_SHEET_DATA':
      data.values.forEach(val => console.log(val))
      break

    default:
      break;
  }
});

var API_OBJ = {
  isLoaded: false,
  isSignedIn: false
};

export default API_OBJ;

/*
* Google oAuth
* client id
* 292874472302-tblbbqs8phl4fft8gg30pqnepg6ec1ug.apps.googleusercontent.com
* client secret
* eGEbL-5BLWsZQMK1tOJeQxhv
*/

// Client ID and API key from the Developer Console
var CLIENT_ID = '292874472302-tblbbqs8phl4fft8gg30pqnepg6ec1ug.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";


function init() {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

      API_OBJ.isLoaded = true;
      ctrl.broadcast('GOOGLE_LOADED')
    });
  })
}
function updateSigninStatus(isSignedIn) {
  ctrl.broadcast('GOOGLE_AUTHCHANGE', {isSignedIn:isSignedIn})
  API_OBJ.isSignedIn = isSignedIn;
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    range: 'Class Data!A2:E',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      ctrl.broadcast('GOOGLE_SHEET_DATA', {values:range.values})
    } else {
      ctrl.broadcast('GOOGLE_SHEET_DATA', {error:'No data found'})
    }
  }, function(response) {
    ctrl.broadcast('GOOGLE_SHEET_DATA', {error: response.result.error.message})
  });
}

init();