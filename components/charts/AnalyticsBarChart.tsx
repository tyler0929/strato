import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import { Text_14_600 } from "../typography/Typography";

const data = [
  {
    name: "4:30 am",
    pv: 20,
    amt: 240,
    date: "Nov 21, 2024, 12:00 AM (UTC)",
  },
  {
    name: "4:30 am",
    pv: 20,
    amt: 22,
    date: "Nov 16, 2024, 12:00 AM (UTC)",
  },
  {
    name: "4:30 am",
    pv: 20,
    amt: 22,
    date: "Nov 10, 2024, 12:00 AM (UTC)",
  },
  {
    name: "4:30 am",
    pv: 100,
    amt: 100,
    date: "Nov 4, 2024, 12:00 AM (UTC)",
  },
  {
    name: "4:30 am",
    pv: 10,
    amt: 100,
    date: "Nov 1, 2024, 12:00 AM (UTC)",
  },
];

const AnalyticsBarCharts = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered index
  // Custom Tooltip Renderer
  const [dateValue, setDateValue] = useState("Nov 1, 2024, 12:00 AM (UTC)");
  const CustomTooltip = ({ active, payload }: any) => {
    if (payload?.[0]?.payload?.date) {
      setDateValue(payload?.[0]?.payload?.date);
    }
  


    if (active && payload && payload.length) {
      return (
        <div
          style={{
            display: "none",
            position: "absolute",
            top: 0,
            left: "10%",
            background: "white",
            color: "#000",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          }}
        >
          <p style={{ margin: 0 }}>{payload[0].value.toFixed(7)}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="h-full ">
      <Text_14_600 text={dateValue} />
      <div className="h-60">
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{ position: "relative" }}
        >
          <BarChart
            data={data}
            margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
            style={{ direction: "ltr" }}
            barSize={10} // Adjust the bar width here
            
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C9C8CB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3F3A45" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* Render ReferenceLine on hover */}
            {hoveredIndex !== null && (
              <ReferenceLine
                x={data[hoveredIndex].name}
                stroke="#8884d8"
                strokeWidth={2}
                strokeDasharray="3 3"
              />
            )}

            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
            
            <XAxis
              dataKey="name"
              reversed={true}
              tick={{ fontSize: 12, fill: "#FFF" }}
              axisLine={false}
              tickLine={false}
            ></XAxis>

            <YAxis
              orientation="right"
              tick={{ fontSize: 12, fill: "#FFF" }}
              tickLine={false}
              axisLine={false}
            />

            <Bar dataKey="pv" fill="#1D51FE" width={1}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default AnalyticsBarCharts;
