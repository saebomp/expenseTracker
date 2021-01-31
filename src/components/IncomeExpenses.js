import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item),0)
    .toFixed(2);
  //income은 transaction 에서 0보다 큰 숫자들을 filter 로 추려서 reduce 로 다 더해줌

  const expense = (
    amounts.filter(item => item < 0 ).reduce((acc,item) => (acc += item), 0) * -1
    ).toFixed(2)

  return (
  <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">${income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">${expense}</p>
    </div>
  </div>
  )
}