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
          gray1:"#cfd1d6",
          gray2:"#3a4560"
        }
      },
      fontFamily: {
        ipa_font:"ipa_font",
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      boxShadow:{
        shadowsFocus:" 0px 0px 0px 1px #7645d9, 0px 0px 0px 4px rgba(118, 69, 217, .6)"
      },

      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      }, 
      animation: {
        fadeIn: 'fadeIn 0.99s ease-in-out',
        slideInLeft: "slideInLeft 0.3s ease-out",
        slideOutLeft: "slideOutLeft 0.3s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
