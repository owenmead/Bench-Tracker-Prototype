import gapi from './google_api'

var authChangeObservers = [];
// Will likely need an unsubscribe

var API_OBJ = {
  init: init,

  isSignedIn: false,
  signIn: () => gapi.auth2.getAuthInstance().signIn(),
  signOut: () => gapi.auth2.getAuthInstance().signOut(),
  listenAuthChange: listener => authChangeObservers.push(listener),
  getProfile: getProfile,

  getMajors: getMajors,
};

export default API_OBJ;

/*
* Google oAuth
* client id
* ----to_be_filled_in---------
* client secret
* ----to_be_filled_in---------
*/

// Client ID and API key from the Developer Console
var CLIENT_ID = 'set id here';
console.error('CLIENT_ID not set')

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";


function init(readyCallback) {
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

      if (readyCallback) {
        readyCallback();
      }
    });
  })
}
function updateSigninStatus(isSignedIn) {
  API_OBJ.isSignedIn = isSignedIn;
  authChangeObservers.forEach(listener => listener(isSignedIn))
}

function getProfile() {
  if (API_OBJ.isSignedIn) {
    var g_profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    return {
      id: g_profile.getId(),
      name: g_profile.getName(),
      givenName: g_profile.getGivenName(),
      familyName: g_profile.getFamilyName(),
      imageUrl: g_profile.getImageUrl(),
      email: g_profile.getEmail(),
    }
  } else {
    return { error: 'User Not Signed In'}
  }
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1Ad0z0tTEVTyZTccXDuh-XRKkGFv4DFqQEgYzSwZlzlg/edit
 */
function getMajors() {
  console.error('spreadsheetId not set')
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: 'INSERT ID HERE',
    range: 'Owen Tracker!B3:AA11',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      return range.values;
    } else {
      console.warn('No data back from Google');
      return []
    }
  }, function(response) {
    console.warn('bad news bears:', response.result.error.message);
    return response.error;
  });
}
