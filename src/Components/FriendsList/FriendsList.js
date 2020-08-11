import React from 'react';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">{friend.isOnline}</span>
          <img className="avatar" src={friend.avatar} alt="avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
