/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: [
  //   './src/components/**/*.{js,ts,jsx,tsx}',
  //   './src/components/*.{js,ts,jsx,tsx}',
  //   './src/pages/*.{js,ts,jsx,tsx}',
  //   './src/*.{js,ts,jsx,tsx}',
  // ],
  theme: {
    extend: {
      flexGrow: {
        '2': '2',
      },
    },
  },
  plugins: [],
}

