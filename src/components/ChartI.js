import React, {useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'
import IncomeChart from "./IncomeChart";

export const ChartI = () => {
  const {transactions} = useContext(GlobalContext);

  const [data, setData] = useState(transactions);
  const changeData = () => {
    setData(transactions);
  };

  return (
    <IncomeChart
      data={data}
      width={300}
      height={300}
      innerRadius={110}
      outerRadius={150}
    />
  )
}