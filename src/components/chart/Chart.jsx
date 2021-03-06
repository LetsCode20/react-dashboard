import React from 'react';
// Chart Elements
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Style
import './chart.scss';

const Chart = ({ aspect, title }) => {
  // Chart Data
  const data = [
    {
      name: 'January',
      total: 1200,
    },
    {
      name: 'February',
      total: 2100,
    },
    {
      name: 'March',
      total: 800,
    },
    {
      name: 'April',
      total: 1600,
    },
    {
      name: 'May',
      total: 900,
    },
    {
      name: 'June',
      total: 1700,
    },
  ];

  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <ResponsiveContainer width='100%' height='100%' aspect={aspect}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='totalRev' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#FF8E7F' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#FF8E7F' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' className='chartGrid' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='total'
            stroke='#FF8E7F'
            fillOpacity={1}
            fill='url(#totalRev)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
