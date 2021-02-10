import React, {useContext, useState, useEffect } from 'react'
import {GlobalContext} from '../context/GlobalState'
import * as d3 from "d3";
import PieChart from "./PieChart";
// import PieSVG from "./PieSVG";

export const Chart = () => {
  const {transactions} = useContext(GlobalContext);

  // const generateData = (value, length = 5) =>
  //   d3.range(length).map((item, index) => ({
  //     date: index,
  //     value: value === null || value === undefined ? Math.random() * 100 : value
  //   }));


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
      {/* <div>
        <span className="label">SVG Elements</span>
        <PieSVG
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div> */}
    </div>
  )
}