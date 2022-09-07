import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList(props) {
  const { friends } = props;
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
