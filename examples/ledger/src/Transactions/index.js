import React from 'react'
import Deposits from './Deposits';

import './styles.css';

const Transactions = props => {
  return (
    <div className="transactionsContainer">
      <Deposits />
      <div className="transactionBox">Placeholder for Debits</div>
    </div>
  )
}

export default Transactions
