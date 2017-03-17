import React from 'react';

import AccountList from './AccountList/AccountList'

const ClientRow = ({client}) => {
  return <div className="ClientRow">
    <div className="ClientRow_Title">{client.name}</div>
    <AccountList accounts={client.accounts} />
  </div>
}

export default ClientRow;