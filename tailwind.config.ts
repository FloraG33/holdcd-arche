import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'primary': '#1A2665',
      'secondary': '#FA7B1E',
      'text': '#858585',
      'title': '#696868',
      'minibar': '#D9D9D9',
      "white": '#fff',
      "black": "#000",
      "fondContact": "#F6F6F6",
      "grayFonced": "#232323",
      'service-bg': "#FEFEFE",
      'whatsapp-color': "#64B161"
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#1A2665',
          'secondary': '#FA7B1E',
          'text': '#858585',
          'title': '#696868',
          'minibar': '#D9D9D9',
          "white": '#fff',
          "black": "#000",
          "fondContact": "#F6F6F6"
        },
      },
    ],
  },
};
export default config;
