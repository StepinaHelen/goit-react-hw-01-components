import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colors = ['#75d6ff', 'DeepPink', '#ffb575', 'red', '#75ffa8'];

const Statistics = ({ properties }) => (
  <section className={styles.statistics}>
    <h2>Задание №2</h2>
    <h2 className={styles.title}>Upload stats</h2>
    <ul>
      {properties.map(({ id, label, percentage }, index) => (
        <li
          className={styles.item}
          key={id}
          style={{ backgroundColor: colors[index] }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Statistics;
