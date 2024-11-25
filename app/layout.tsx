import type { Metadata } from "next";
import "./globals.css";
import WebHeader from "@/components/header/WebHeader";
import { SwapProvider } from "@/components/context/SwapContext";
import FooterComponent from "@/components/footer/footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LiquidityProvider } from "@/components/context/LiquidityContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include the required weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-black-main`}>
        <div className="section-header">
          <WebHeader />
        </div>
        <div className="section-content max_width_app pt-24 px-4 md:px-10">
          <SwapProvider>
            <LiquidityProvider>{children}</LiquidityProvider>
          </SwapProvider>
        </div>
        <div className="section-footer max_width_app px-5 md:px-10">
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
