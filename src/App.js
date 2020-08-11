import React from 'react';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendsList from './Components/FriendsList/FriendsList';
import TransactionHistory from './Components/Transactions/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical_data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
