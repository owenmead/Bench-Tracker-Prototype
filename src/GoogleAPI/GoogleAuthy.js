import React from 'react'
import { connect } from 'react-redux'
import { user_signin, user_signout } from '../Store/Actions/index'
import GoogleProfile from './GoogleProfile'

let GoogleAuthy = ({ isSignedIn, profile, signInFn, signOutFn }) => {
  console.log(profile);

  profile = isSignedIn ? <GoogleProfile {...profile} /> : null;

  var btn = isSignedIn ?
              <button onClick={signOutFn}>Sign Out</button> :
              <button onClick={signInFn}>Sign In</button>;

  return (
    <div>
      {profile} {btn}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSignedIn : state.googleAuth.isSignedIn,
    profile    : state.googleAuth.profile
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