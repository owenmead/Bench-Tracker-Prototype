import React from 'react'

var profileImgStyle = {
  width: '48px',
  borderRadius: '48px',
  boxShadow: '0px 0px 3px #999'
}

const GoogleProfile = ({ name, imageUrl }) => {
  return (<div>
    <img alt={name} style={profileImgStyle} src={imageUrl} />
  </div>)
}

export default GoogleProfile