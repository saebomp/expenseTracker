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
    <>
    <div className="bg-white shadow-lg group block rounded-lg p-4 border flex flex-row divide-x mt-12">
      <div className="w-6/12 text-center">
        <h4>Income</h4>
        <p className="text-customgreen-900 text-xl font-semibold">${income}</p>
      </div>
      <div className="w-6/12 text-center">
        <h4>Expense</h4>
        <p className="text-customred-900 text-xl font-semibold">${expense}</p>
      </div>
    </div>
  </>
  )
}