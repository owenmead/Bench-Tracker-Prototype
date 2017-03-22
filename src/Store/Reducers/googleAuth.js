const initial_state = {
  isSignedIn: false,
  userRequest: null, // could be used to display when waiting for user input
  profile: null
}

const foo = (state=initial_state, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return {
        ...state,
        userRequest: 'SIGNIN'
      }
    case 'USER_SIGNOUT':
      return {
        ...state,
        userRequest: 'SIGNOUT',
        profile: null
      }
    case 'GOOGLE_AUTHCHANGE':
      return {
        ...state,
        isSignedIn: action.isSignedIn,
        userRequest: null,
        profile: action.profile
      }

    default:
      return state
  }
}

export default foo