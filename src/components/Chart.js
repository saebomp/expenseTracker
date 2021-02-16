import React, {useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'
import PieChart from "./PieChart";

export const Chart = () => {
  const {transactions} = useContext(GlobalContext);

  const [data, setData] = useState(transactions);
  const changeData = () => {
    setData(transactions);
  };

  return (
    <PieChart
      data={data}
      width={300}
      height={300}
      innerRadius={110}
      outerRadius={150}
    />
  )
}