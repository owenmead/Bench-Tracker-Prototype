const initial_state = {
  isSignedIn: false,
}

const foo = (state=initial_state, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return {
        ...state,
        isSignedIn: true
      }
    case 'USER_SIGNOUT':
      return {
        ...state,
        isSignedIn: false
      }

    default:
      return state
  }
}

export default foo