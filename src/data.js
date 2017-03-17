import padStart from './util/padStart'

var viewData = {
  monthsToDisplay: ['16/09', '16/10', '16/11', '16/12', '17/01', '17/02', '17/03', '17/04']
}
export {viewData};

var baseStatus = {}

var key;
for (var i=0; i<24; i++) {
  key = '' + (16+Math.floor(i/12)) + '/' + padStart(i%12+1, 2, '0');
  baseStatus[key] = (i<14) ? 'C' : null;
}

var clients = {
  '9823744' : {
    id: '9823744',
    name: 'Alphafa Group',
    accounts: [
      { name: 'Chase Credit Card - 9420', },
      { name: 'Bank of America - Checking' },
      { name: 'Bank of America - Savings' },
      { name: 'PayPal' },
      { name: 'Etsy' },
      { name: 'Shopify' },
    ]
  },

  '1238933': {
    id: '1238933',
    name: 'Automation Heroes',
    accounts: [
      { name: 'Chase Credit Card - 2609' },
      { name: 'Chase Credit Card - 9372' },
      { name: 'US Bank - Checking 2983' },
      { name: 'PayPal' },
      { name: 'Dwolia' },
    ]
  },

  '2389738': {
    id: '2389738',
    name: 'Camp Four Creative',
    accounts: [
      { name: 'Vectra Chk x3948' },
      { name: 'Vectra Sav x2387' },
      { name: 'Wells Fargo - Credit Card 3787' },
      { name: 'Wells Fargo - Checking 5533' },
      { name: 'Stripe' },
    ]
  },
};

// Fill base status for all clients
Object.keys(clients).forEach(clientId => {
  clients[clientId].accounts.forEach(account => {
    account.status = {...baseStatus}
  })
});

export { clients }