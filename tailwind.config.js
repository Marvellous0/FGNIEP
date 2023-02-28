module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'] 
    },
    extend: {
      colors: {
        "primary": "#45c49c",
        "secondary": "#f8fafb",
        "gray": "#081131",
      }
      
    },
  },
  plugins: [], 
}