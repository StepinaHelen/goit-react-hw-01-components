import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transaction }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    {transaction.map(({ id, type, amount, currency }) => (
      <tbody key={id}>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      amount: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
