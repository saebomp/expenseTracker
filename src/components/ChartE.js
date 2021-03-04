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
      width={400}
      height={400}
      innerRadius={160}
      outerRadius={200}
    />
  )
}