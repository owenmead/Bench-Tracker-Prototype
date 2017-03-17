import React from 'react';

import AccountRow from './AccountRow'

const AccountList = ({accounts}) => {
  return <div className="AccountList">
    {accounts.map((account, index) => <AccountRow key={index} account={account} />)}
  </div>
}

export default AccountList;