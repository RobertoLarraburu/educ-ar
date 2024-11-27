/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        customGray: '#5e5e5e',
        blacknav: {
          DEFAULT: '#121212',
          24: ('18, 18, 18, 0.24')
      },

    },
  },
  plugins: [],
}
}



// remember to use module.exports instead of tailwind.config in production
tailwind.config = {
  // Note: config only includes the used styles & variables of your selection
  content: ["./src/**/*.{html,vue,svelte,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
      borderRadius: {},
      colors: {
        white: "#ffffff",
        black: "#121212",
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
};
