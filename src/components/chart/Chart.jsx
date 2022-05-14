import React from 'react'
import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    {
      name: "January",
      Total: 1200
    },
    {
      name: "February",
      Total: 800
    },
    {
      name: "March",
      Total: 500
    },
    {
      name: "April",
      Total: 1600
    },
    {
      name: "May",
      Total: 1500
    },
    {
      name: "June",
      Total: 800
    },
  ];

  return (
    <div className='chart'>
    <div className="title">Last 7 Months (revenue)</div>
      <ResponsiveContainer width="100%" aspect={ 2 / 1 }>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6439ff" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6439ff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#6439ff" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart