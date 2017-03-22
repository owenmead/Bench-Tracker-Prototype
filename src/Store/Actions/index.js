import API from '../../GoogleAPI/API.js'

export const google_authchange = (isSignedIn) => {
  return {
    type: 'GOOGLE_AUTHCHANGE',
    isSignedIn: isSignedIn,
    profile: isSignedIn ? API.getProfile() : null
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