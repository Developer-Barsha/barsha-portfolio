module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#7a77ff",
          "secondary": "#f73696",
          "accent": "#fefefe",
          "neutral": "#081423",
          "base-100": "#FFFFFF",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
      {
        dark: {
          "primary": "#7a77ff",
          "secondary": "#ffce5b",
          "accent": "#1E293B",
          "neutral": "#081423",
          "base-100": "#1F2937",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#F59E0B",
          "error": "#FB7185",
        },
      },
    ],
  },
  // darkest: #0F172A
  // darker: #1E293B
  // dark: #334155 

  // yellow deep : #FDC538
  // yellow bright: #ffce5b

  // pink deep : #f73696
  // pink bright: #f959a7
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} 