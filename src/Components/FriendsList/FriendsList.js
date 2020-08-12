import React from 'react';
import styles from './FriendsList.module.css'
import PropTypes from 'prop-types';


const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span className={friend.isOnline===true?styles.isOffline: styles.isOnline}></span>
          <img className={styles.avatar} src={friend.avatar} alt="avatar" width="48" />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired,
};

export default FriendsList;
