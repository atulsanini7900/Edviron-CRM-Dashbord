import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Online', value: 63, fill: '#0088FE' },
  { name: 'Cash', value: 25, fill: '#00C49F' },
  { name: 'Cheque', value: 11, fill: '#FFBB28' },
];

const DonutChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ name, value }) => `${name}: ${value}%`}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
