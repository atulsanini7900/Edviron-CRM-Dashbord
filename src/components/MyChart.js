import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

const data=[
    {
        name:"Jan",
        Collection: 100,
        
    },
    {
        name: "Feb",
        Collection: 90,
      },
      {
        name: "Mar",
        Collection: 90,
      },
      {
        name: "April",
        Collection: 80,
      },
      {
        name: "May",
        Collection: 75,
      },
      {
        name: "June",
        Collection: 60,
      },
      {
        name: "July",
        Collection: 50,
      },
      {
        name: "Aug",
        Collection: 45,
      },
      {
        name: "Sep",
        Collection: 40,
      },
      {
        name: "Oct",
        Collection: 35,
      },
      {
        name: "Nov",
        Collection: 20,
      },
      {
        name: "Dec",
        Collection: 10,
      },
]

const MyChart = () => {
  const formatYAxis = (value) => {
    return `${value}%`;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Collection" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MyChart
