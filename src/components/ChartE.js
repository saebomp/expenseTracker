import React, {useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'
import ExpenseChart from "./ExpenseChart";

export const ChartE = () => {
  const {transactions} = useContext(GlobalContext);

  const [data, setData] = useState(transactions);
  const changeData = () => {
    setData(transactions);
  };

  return (
    <ExpenseChart
      data={data}
      width={300}
      height={300}
      innerRadius={110}
      outerRadius={150}
    />
  )
}