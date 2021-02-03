import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  // console.log(context);
  const {transactions} = useContext(GlobalContext);
  //GlobalState.js 에서 만든 initialState 가져오는것임
  //context는 initialState를 통채로 가져오니까 그 안의 {transactions} 라는 array가져옴

  return (
    <>
      <h3 className="leading-6 text-lg text-black mt-12 mb-4">History</h3>
      <ul className="">
        {transactions.map(transaction => (
          <Transaction 
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  )
}