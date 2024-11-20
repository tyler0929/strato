import { SwapProvider } from "@/components/context/SwapContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SwapProvider>
      <Component {...pageProps} />
    </SwapProvider>
  );
}
