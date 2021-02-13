// функция которая должна вернуть какую-нибудь разметку
// один файл-один компонент
import React from 'react';

import Profile from './components/Profile/Profile';
import user from './user.json';

import FriendList from './components/Friends/FriendList';
import friends from './friends.json';

import Statistics from './components/Statistics/Statistics';
import staticticData from './statistical-data.json';

import transaction from './transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

import Container from './components/Container/Container';

const App = () => {
  return (
    <Container Container>
      <h2>Задание №1</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Statistics properties={staticticData} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </Container>
  );
};
export default App;
