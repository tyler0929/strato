"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

import USDC from "../../public/assets/images/usdc.png";
import POL from "../../public/assets/images/pol.png";
import START from "../../public/assets/images/start.png";
import Image from "next/image";
// Define the shape of the context state

// Create the context
const LiquidityContext = createContext<any | undefined>(undefined);

// Create a provider component
interface LiquidityProviderProps {
  children: ReactNode;
}

export type LiquidityPoint = {
  endIndex: number;
  startIndex: number;
};
const data = Array.from({ length: 100 }, (_, i) => ({
  name: (i + 1).toString(),
  uv: Math.floor(Math.random() * 501) - 250, // Random between -250 to 250
  pv: Math.floor(Math.random() * 501), // Random between 0 to 500
}))
export const LiquidityProvider: React.FC<LiquidityProviderProps> = ({
  children,
}) => {
  const [zoomLiquidityPool, setZoomLiquidityPool] = useState(1);
  const [liquidityChartWidth, setLiquidityChartWidth] = useState(1000);
  const [liquidityPoints, setLiquidityPoints] = useState<LiquidityPoint>({
    endIndex: 60,
    startIndex: 40,
  });
  const [liquidityData, setLiquidityData] = useState(data);
  return (
    <LiquidityContext.Provider
      value={{
        zoomLiquidityPool,
        setZoomLiquidityPool,
        liquidityPoints,
        setLiquidityPoints,
        liquidityChartWidth,
        setLiquidityChartWidth,
        liquidityData, setLiquidityData
      }}
    >
      {children}
    </LiquidityContext.Provider>
  );
};

// Custom hook to use the context
export const useLiquidityContext = () => {
  const context = useContext(LiquidityContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
