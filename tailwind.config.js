module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#7a77ff",
          "secondary": "#FFC000",
          "accent": "#0F172A",
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
          "secondary": "#FDE68A",
          "accent": "#0F172A",
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
  // dark: #0F172A
  // light: #1E293B
  // lighter: #334155 
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} 