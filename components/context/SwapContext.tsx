
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

import USDC from "../../public/assets/images/usdc.png";
import POL from "../../public/assets/images/pol.png";
import START from "../../public/assets/images/start.png";
import Image from "next/image";
// Define the shape of the context state


// Create the context
const SwapContext = createContext<any | undefined>(undefined);

// Create a provider component
interface SwapProviderProps {
  children: ReactNode;
}
export type Token = {
  address: string;
  iconAddress: ReactNode;
  id: string;
  symbol: string;
  name: string;
};
export const SwapProvider: React.FC<SwapProviderProps> = ({ children }) => {
    const [tokens, setTokens] = useState<Token[]>([
        {
            address:"first-token-address",
            iconAddress:<Image src={POL} alt="START image" width={25} height={25}/>,
            id:"2",
            name:"POL",
            symbol:"POL"
        },
      {
          address:"first-token-address",
          iconAddress:<Image src={USDC} alt="Usdc image" width={25} height={25}/>,
          id:"1",
          name:"USDC",
          symbol:"USDC"
      },
      {
          address:"first-token-address",
          iconAddress:<Image src={START} alt="START image" width={25} height={25}/>,
          id:"3",
          name:"StratoSwap Token",
          symbol:"STRAT"
      },
      {
          address:"first-token-address",
          iconAddress:<Image src={POL} alt="START image" width={25} height={25}/>,
          id:"4",
          name:"Wrapped POL",
          symbol:"WPOL"
      },
    ]);
  const [inputCurrency, setInputCurrency] = useState<Token | null>(tokens[0]);
  const [outputCurrency, setOutputCurrency] = useState<Token | null>(tokens[3]);

  return (
    <SwapContext.Provider
      value={{
        inputCurrency,
        setInputCurrency,
        outputCurrency,
        setOutputCurrency,
        tokens,
        setTokens,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};

// Custom hook to use the context
export const useSwapContext = () => {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
