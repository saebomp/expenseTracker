import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(transactions => transactions.amount);
  console.log('amounts', amounts)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //reduce 로 amount array안에 있는 값 다 더해줌

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}