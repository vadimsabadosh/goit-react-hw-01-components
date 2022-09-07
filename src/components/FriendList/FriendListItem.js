import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendListItem(props) {
  const { name, avatar, isOnline } = props;
  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${isOnline && styles.online}`}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
