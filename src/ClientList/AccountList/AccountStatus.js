import React from 'react';

const options = ['', 'C', 'DO', 'DP', 'Req', 'S'];

const AccountStatus = ({status}) => {

  status = status || '';

  return <span className="AccountStatusSelect"><select defaultValue={status} alt={status}>
  {options.map((op, index) => {
    return <option key={index} value={op}>{op}</option>
  })}
  </select></span>
}

export default AccountStatus;