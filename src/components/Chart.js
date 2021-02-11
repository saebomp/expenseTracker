import React, {useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'
import PieChart from "./PieChart";
// import PieSVG from "./PieSVG";

export const Chart = () => {
  const {transactions} = useContext(GlobalContext);

  const [data, setData] = useState(transactions);
  const changeData = () => {
    setData(transactions);
  };

  return (
    <div className="App">
      <div>
        <button onClick={changeData}>Transform</button>
      </div>
      <div>
        <span className="label">Hooks</span>
        <PieChart
          data={data}
          width={500}
          height={500}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
    </div>
  )
}