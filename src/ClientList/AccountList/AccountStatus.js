import React from 'react';

const options = ['', 'C', 'DO', 'DP', 'Req', 'S'];

const AccountStatus = ({status}) => {

  status = status || '';

  return <select className="AccountStatusSelect" defaultValue={status} alt={status}>
  {options.map(op => {
    return <option value={op}>{op}</option>
  })}
  </select>
}

export default AccountStatus;