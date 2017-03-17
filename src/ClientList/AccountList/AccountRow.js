import React from 'react';

import AccountStatus from './AccountStatus'

const AccountRow = ({account}) => {

  var status = [];
  Object.keys(account.status).sort().map(k => {
    status.push(<AccountStatus status={account.status[k]} />)
  });

  return <div className="AccountRow">
    <span className="AccountRowName">{account.name}</span>
    {status}
  </div>
}

export default AccountRow;