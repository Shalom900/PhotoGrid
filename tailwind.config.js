/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Ensures JIT mode is enabled
  important: true,
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        primary: "#1A237E",
        secondary: "#f1c40f",
        tertiary: "#e74c3c",
        button: "#26A69A",
        button2: "#20c997"
      },
      screens: {
        'custom-393': '393px', // Custom breakpoint for 393px width
       'ipad-air-portrait':'895px', // 800px to 1179px for portrait
        'ipad-air-landscape':'1122px', // 1180px and up for landscape
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.5, 0, 0.5, 1)',
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}

