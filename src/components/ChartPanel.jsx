import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const sampleData = [ 
  // Ideally filtered data passed in via props or fetched based on filters
  { year: 2020, yield: 4.5, profit: 200 },
  { year: 2021, yield: 4.8, profit: 220 },
  { year: 2022, yield: 5.0, profit: 250 },
  // ...
];

const ChartPanel = ({ filters }) => {
  // Possibly filter or transform sampleData based on filters
  const data = sampleData.filter(item => {
    if(filters.year && item.year !== Number(filters.year)) return false;
    return true;
  });
  return (
    <div className="chart-panel">
      <h3>Yield vs Profit Over Time</h3>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="year" />
        <YAxis yAxisId="left" label={{ value: 'Yield (tons)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Profit ($k)', angle: -90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="yield" stroke="#82ca9d" />
        <Line yAxisId="right" type="monotone" dataKey="profit" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
export default ChartPanel;
