module.exports = {
  mode: 'jit',
   // These paths are just examples, customize them to match your project structure
   purge: [
     './**/*.html',
     './**/**/.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray333: "#333",
      },
      height : {
        header_height: "var(--header-height)",
      },
      padding : {
        header_height: "var(--header-height)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
