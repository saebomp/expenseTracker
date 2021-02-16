import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState'
import NumberFormat from 'react-number-format';
import {Chart} from './Chart'
import { FcBarChart } from 'react-icons/fc';

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const [modal, setModal] = useState(false)

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
        <p className="text-customgreen-900 text-2xl font-semibold">
          <NumberFormat value={income} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </p>
        <div>
          <button
            className="relative focus:outline-none"
            onClick={() => setModal(true)}
          >
            <span className="inline-block text-sm text-customtext-900">View Chart</span>
            <span className="inline-block absolute top-1"><FcBarChart /></span>
          </button>
          
        </div>

        {modal ?
          <div className="absolute z-10 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded shadow-lg p-8 text-center flex justify-center">
            <Chart />
            <button 
              className="absolute top-2 right-4 z-10 cursor-pointer focus:outline-none outline-none text-xl"
              onClick={() => setModal(false)}
              >x
            </button>
          </div>
          : null
          }
      </div>
      <div className="w-6/12 text-center">
        <h4>Expense</h4>
        <p className="text-customred-900 text-2xl font-semibold">
          <NumberFormat value={expense} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </p>
      </div>
    </div>

    
  </>
  )
}