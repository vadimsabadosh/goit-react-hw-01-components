import Profile from './Profile';
import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
