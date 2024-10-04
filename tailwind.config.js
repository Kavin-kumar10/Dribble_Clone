/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' }, // Start position
          '100%': { transform: 'translateX(-100%)' }, // End position when the cards fully scroll out
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite', 
      },
      colors:{
        primary:"#0d0c22",
        secondary:"#F8F7F4"
      },
      boxShadow: {
        'custom-shadow': '0px 0px 0px 4px rgba(234, 100, 217, 0.1)',
      },
      fontFamily: {
        'source-serif': ['"Source Serif 4"', 'system-ui'], 
        'georgia-italic': ['"Georgia Italic"', 'serif'],
        'mona-sans':["Mona-sans","serif"],
        // 'mona-sans-normal':["Mona-sans-normal","serif"],
        'serif-font':["serif-font","system-ui"]
      },
    },
  },
  plugins: [],
}

