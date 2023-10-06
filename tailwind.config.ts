import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ef8fcf",
          "secondary": "#fce5bf",
          "accent": "#9e1f43",
          "neutral": "#311f38",
          "base-100": "#333948",
          "info": "#a7c4e6",
          "success": "#55e2c4",
          "warning": "#f0d775",
          "error": "#e0245d",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
}
export default config
