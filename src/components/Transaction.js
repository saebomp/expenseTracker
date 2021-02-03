import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'shadow border-r-4 border-customred-900 p-3 mb-3 bg-white' : 'shadow border-r-4 border-customgreen-900 p-3 mb-3 bg-white'}>
      {transaction.text} 
      <span className="float-right">
        {sign}${Math.abs(transaction.amount)}
      </span>
      {/* Math.abs : 숫자 positive number 로 바꿔줌*/}
      <button 
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >x</button>
    </li>
  )
}