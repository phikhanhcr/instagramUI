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
      },
      keyframes: {
        showModal: {
          '0%': { transform: 'scale(1.3)', opacity: '70%' },
          '100%': { transform: 'scale(1)', opacity: '100%' },
        },
        hideDirectModal : {
          '0%': { transform: ' translateX(0px)',},
          '100%': {transform: ' translateX(400px)',},
        }
       },
       animation: {
        showModal: 'showModal ease-in-out .1s',
        hideDirectModal : "hideDirectModal ease-in-out .1s"
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
