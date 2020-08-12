import React from 'react';
import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => ( 
          <tr key={item.amount}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type:PropTypes.string,
  amount:PropTypes.number.isRequired,
};

export default TransactionHistory;
