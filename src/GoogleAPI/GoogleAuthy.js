import React from 'react'
import { connect } from 'react-redux'
import { user_signin, user_signout } from '../Store/Actions/index'

let GoogleAuthy = ({ isSignedIn, signInFn, signOutFn }) => {

  var btn = isSignedIn ?
              <button onClick={signOutFn}>Sign Out</button> :
              <button onClick={signInFn}>Sign In</button>;

  return (
    <div>Do all da google! {btn}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSignedIn : state.googleAuth.isSignedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInFn: () => {
      dispatch(user_signin());
    },
    signOutFn: () => {
      dispatch(user_signout());
    }
  }
}

GoogleAuthy = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuthy)

export default GoogleAuthy