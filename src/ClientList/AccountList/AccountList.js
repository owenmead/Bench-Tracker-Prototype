import React from 'react';

import './AccountList.css'

import AccountRow from './AccountRow'

var accountIndex = 0;

const AccountList = ({accounts}) => {
  return <div className="AccountList">
    {accounts.map(account => <AccountRow key={accountIndex++} account={account} />)}
  </div>
}

export default AccountList;