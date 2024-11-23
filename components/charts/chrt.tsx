'use client';

import React, { useRef } from 'react';
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Brush,
} from 'recharts';

const data = Array.from({ length: 100 }, (_, i) => ({
  name: (i + 1).toString(),
  uv: Math.floor(Math.random() * 501) - 250, // Random between -250 to 250
  pv: Math.floor(Math.random() * 501), // Random between 0 to 500
}));

const ResizableChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (chartRef.current) {
      isMouseDown = true;
      startX = e.pageX - chartRef.current.offsetLeft;
      scrollLeft = chartRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !chartRef.current) return;
    e.preventDefault();
    const x = e.pageX - chartRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    chartRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isMouseDown = false;
  };

  return (
    <div
      className="relative w-[300px] h-[220px] overflow-x-hidden"
      ref={chartRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Full-height Brush above the chart */}
      <div className="absolute top-0 left-0 w-full h-[170px] z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Brush dataKey="name" height={170} stroke="#8884d8" startIndex={10}
            endIndex={20}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Main Chart */}
      <div className="relative w-[1000px] z-0">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 40, // Adjust margin to accommodate Brush height
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResizableChart;
