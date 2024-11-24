import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";


const data = [
  {
    name: "Nov Tu",
    uv: 40,
    pv: 24,
    amt: 240,
  },
  {
    name: "Nov Su",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Nov Sa",
    uv: 20,
    pv:23,
    amt: 22,
  },
  {
    name: "Nov Fr",
    uv: 27,
    pv: 39,
    amt: 100,
  },
  
];

const cardinal = curveCardinal.tension(0.2);



const HistoryPriceChart = () => {
  const demoUrl = "https://codesandbox.io/s/area-chart-different-shapes-z94k6";

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart

        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        style={{ direction: "ltr" }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2748BE" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3B3847" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" reversed={true}></XAxis>
    
        <YAxis orientation="right" />


        <Area
          type="monotone"
          dataKey="pv"
          stroke="#1D51FE"
          fillOpacity={2}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default HistoryPriceChart;