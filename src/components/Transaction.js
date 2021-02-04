import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'position: relative shadow border-r-4 border-customred-900 p-3 mb-3 bg-white' : 'position: relative shadow border-r-4 border-customgreen-900 p-3 mb-3 bg-white'}>
      {transaction.text} 
      <span className="float-right">
        {sign}${Math.abs(transaction.amount)}
      </span>
      {/* Math.abs : 숫자 positive number 로 바꿔줌*/}
      <button 
        className="position: absolute top-2/4 left-0 transform -translate-x-full -translate-y-1/2 bg-gray-300 hover:bg-red-600 text-white text-lg px-2"
        onClick={() => deleteTransaction(transaction.id)}
      >x</button>
    </li>
  )
}