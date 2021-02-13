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
    <div className="App">
      <PieChart
        data={data}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      />
    </div>
  )
}