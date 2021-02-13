import React from 'react';
import defaultImage from '../default.png';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const Friends = ({ id, isOnline, avatar, name }) => (
  <li className={styles.item} key={id}>
    <span className={styles.status}>{isOnline}</span>
    {isOnline ? (
      <span className={styles.isOnline}>{isOnline}</span>
    ) : (
      <span className={styles.isOffline}>{isOnline}</span>
    )}

    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

Friends.defaultProps = {
  avatar: defaultImage,
};

Friends.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friends;
