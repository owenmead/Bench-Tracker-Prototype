import API from '../../GoogleAPI/API.js'

export const google_authchange = (isSignedIn) => {
  return {
    type: 'GOOGLE_AUTHCHANGE',
    isSignedIn: isSignedIn,
    profile: isSignedIn ? API.getProfile() : null
  }
}

export const google_sheets_api_ready = () => {
  return {
    type: 'SHEETS_API_READY'
  }
}

export const init_main_view = () => {
  return {
    type: 'INIT_MAIN_VIEW'
  }
}

// API will fire a GOOGLE_AUTHCHANGE when complete
export const user_signin = () => {
  API.signIn();
  return {
    type: 'USER_SIGNIN'
  }
}
export const user_signout = () => {
  API.signOut();
  return {
    type: 'USER_SIGNOUT'
  }
}