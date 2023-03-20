import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import * as d3 from "d3";

const ArticlesByCategoryChart = () => {
  const [data, setData] = useState<{ name: string; value: number; }[]>([]);

  useEffect(() => {
    fetch("api/articles/categories")
    .then((response) => response.json())
    .then((data) => {
      const formattedData = Object.keys(data).map((category) => ({
        name: category,
        value: data[category],
      }));
      setData(formattedData);
    })
    .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (data.length) {
      const svg = d3.select('#chart');

      const margin = {
        top: 20,
        right: 20,
        bottom: 60,
        left: 60
      };
      const width = parseInt(svg.style('width')) - margin.left - margin.right;
      const height = parseInt(svg.style('height')) - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);
      const y = d3.scaleLinear()
        .range([height, 0]);

      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);

      const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      x.domain(data.map(d => d.name));
      y.domain([0, d3.max(data, d => d.value)!]);

      g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-30)");

      g.append('g')
        .attr('class', 'axis axis--y')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Count');

      g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.name.toString()))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.value));
    }
  }, [data]);

  return (
    <svg id="chart" width="100%" height="500"></svg>
  );
}

export default ArticlesByCategoryChart;