'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  Brush,
  ResponsiveContainer,
} from 'recharts';
import { useLiquidityContext } from '../context/LiquidityContext';

const data = Array.from({ length: 100 }, (_, i) => ({
    name: (i + 1).toString(),
    uv: Math.floor(Math.random() * 501) - 250, // Random between -250 to 250
    pv: Math.floor(Math.random() * 501) // Random between 0 to 500
  }));

const SelectLiquidityChart = () => {

  const {liquidityChartWidth , liquidityPoints , setLiquidityPoints , liquidityData} = useLiquidityContext()
    const chartRef = useRef<HTMLDivElement>(null);
  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;


  useEffect(() => {
    // Set the scroll position to 50% of the container width on mount
    if (chartRef.current) {
      const containerWidth = chartRef.current.scrollWidth;
      const scrollPosition = containerWidth / 2; // Scroll to the middle
      chartRef.current.scrollLeft = scrollPosition;
    }
  }, []);

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
  const handleChangeSelectedArea = (data:any) => {
    setLiquidityPoints(data)
  }
  return (
    <div className=" w-full overflow-x-hidden h-[160px] cursor-crosshair "
    ref={chartRef}
    onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      {/* Full-height Brush above the chart */}
      
      {/* Main Chart */}
      <div className={`relative w-[${liquidityChartWidth}px] z-0`}>
      <div className={`absolute -top-[6px] -left-2 w-full h-[127px] z-50`} onMouseDown={(e) => e.stopPropagation()}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={liquidityData}>
            <Brush dataKey="name" height={127} stroke="#723ae4" fill='#1A243E'  
            width={liquidityChartWidth}
            startIndex={liquidityPoints?.startIndex}
            endIndex={liquidityPoints?.endIndex}
            onChange={handleChangeSelectedArea}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart
            width={liquidityChartWidth}
            height={200}
            data={liquidityData}
            margin={{
              top: 40, // Adjust margin to accommodate Brush height
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" style={{fontSize:"14px"}} color="white" />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="uv" fill="#1A243E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
};

export default SelectLiquidityChart;

