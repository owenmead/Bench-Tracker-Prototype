import React from 'react';
import './ClientList.css'

import ClientRow from './ClientRow'

const ClientList = ({clients}) => {
  return (
    <div className="ClientList">
      {clients.map(client => <ClientRow key={client.id} client={client} />)}
    </div>
  );
}

export default ClientList;
