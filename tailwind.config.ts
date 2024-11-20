import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          main:"#1D51FE",
          dark:"#1C41BB"
        },
        black:{
          main:"#101A33",
          light1:"#1A243E",
          light2:"#1F2C4A"
        },
        gray:{
          gray1:"#cfd1d6"
        }
      },
      fontFamily:{
        PExtraBold:"PExtraBold",
        PBold:"PBold",
        PSemiBold:"PSemiBold",
        PMedium:"PMedium",
        PRegular:"PRegular",
        PLight:"PLight",
        PExtraLight:"PExtraLight",
      }
    },
  },
  plugins: [],
} satisfies Config;
