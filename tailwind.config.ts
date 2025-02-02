import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: "#F8FAE5",
        'light-blue': "#B4D4FF",
      },
      fontFamily: {
        domine: ['Domine', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        flashingRainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '16%': { backgroundPosition: '20% 50%', filter: 'hue-rotate(60deg)' },
          '32%': { backgroundPosition: '40% 50%', filter: 'hue-rotate(120deg)' },
          '48%': { backgroundPosition: '60% 50%', filter: 'hue-rotate(180deg)' },
          '64%': { backgroundPosition: '80% 50%', filter: 'hue-rotate(240deg)' },
          '80%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(300deg)' },
          '100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(360deg)' },
        },
      },
      animation: {
        flashingRainbow: 'flashingRainbow 0.5s steps(6, jump-none) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
