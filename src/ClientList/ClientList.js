import React from 'react';

import ClientRow from './ClientRow'

const ClientList = ({list}) => {
  return (
    <div className="ClientList">
      {list.map(client => <ClientRow key={client.id} client={client} />)}
    </div>
  );
}

export default ClientList;
