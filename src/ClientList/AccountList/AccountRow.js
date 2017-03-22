import React from 'react';

import AccountStatus from './AccountStatus'

import {viewData } from '../../data'

const AccountRow = ({account}) => {

  var status = Object.keys(account.status)
    .filter(k => viewData.monthsToDisplay.indexOf(k) !== -1)
    .sort().map((k, index) => <AccountStatus key={index} status={account.status[k]} />);

  return <div className="AccountRow">
    <span className="AccountRowName">{account.name}</span>
    {status}
  </div>
}

export default AccountRow;