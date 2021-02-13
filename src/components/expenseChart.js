import React, { useEffect, useRef } from "react";
import * as d3 from "d3";


const ExpenseChart = props => {
  const amounts = props.data.filter(transactions => transactions.amount < 0).map(item => item.amount);
  let total = amounts.reduce((acc, item) => (acc += item), 0);
  //get only negative numbers (expense) from the array

  const ref = useRef(null);
  const createPie = d3
  .pie()
  .value(d => {
    if(d.amount < 0){
      return Math.abs(d.amount)
      //converted to positive number
      }
    })
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  // const format = d3.format(".2f");

  useEffect(
    () => {
      const data = createPie(props.data);
      const group = d3.select(ref.current);
      const groupWithData = group.selectAll("g.arc").data(data);

      groupWithData.exit().remove();

      const groupWithUpdate = groupWithData
        .enter()
        .append("g")
        .attr("class", "arc");

      const path = groupWithUpdate
        .append("path")
        .merge(groupWithData.select("path.arc"));

      path
        .attr("class", "arc")
        .attr("d", createArc)
        .attr("fill", (d, i) => colors(i));

      const text = groupWithUpdate
        .append("text")
        .merge(groupWithData.select("text"));

      text
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("x", "-5")
        .attr("y", "10")
        .attr("transform", d => `translate(${createArc.centroid(d)})`)
        .style("fill", "black")
        .style("font-size", 10)
        .text(d => {
          if(d.value > 0){
          return d.data.text
          }
        })

      const text2 = groupWithUpdate
        .append("text")
        .merge(groupWithData.select("text2"));

      text2
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("x", "-5")
        .attr("y", "25")
        .attr("transform", d => `translate(${createArc.centroid(d)})`)
        .style("fill", "black")
        .style("font-size", 10)
        .text(d => {
          if(d.value > 0){
          return ((d.value * 100) / Math.abs(total)).toFixed(2) + ' %'
          }
        })
    },
    [props.data]
  );

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.outerRadius} ${props.outerRadius})`}
      />
    </svg>
  );
};

export default ExpenseChart;