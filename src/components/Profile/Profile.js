import React from 'react';
import defaultImage from '../default.png';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

// передаем объект в виде props
const Profile = ({
  avatar,
  name,
  tag,
  location,
  statsFollowers,
  statsViews,
  statsLikes,
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{statsFollowers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{statsViews}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{statsLikes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};
// Если prop не обязательный, то для него нужно прописать default
// пишем для всех переданных значений
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statsFollowers: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
};

export default Profile;
