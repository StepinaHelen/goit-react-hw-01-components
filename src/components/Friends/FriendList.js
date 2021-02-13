import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './Friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    <h2>Задание №3</h2>
    {friends.map(({ isOnline, avatar, name, id }) => (
      <FriendListItem
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        key={id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
