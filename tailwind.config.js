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
          "info": "#4090fe",
          "success": "#1BBB70",
          "warning": "#ffbc3e",
          "error": "#FA5C5C",
        },
      },
      {
        dark: {
          "primary": "#7a77ff",
          "secondary": "#f959a7",
          "accent": "#1E293B",
          "neutral": "#081423",
          "base-100": "#1F2937",
          "info": "#3ec7f9",
          "success": "#1BBB70",
          "warning": "#ffce5b",
          "error": "#FB7185",
        },
      },
    ],
  },
  // darkest: #0F172A
  // darker: #1E293B
  // dark: #334155 
  theme: {
    extend: {
      backgroundImage: {
        'skills-bg': "url('https://64.media.tumblr.com/5d78b70adeaa28df3adf9b071fee5321/tumblr_pp7catg2X31w5tjdn_500.gifv')"
      }
    }
  },
  plugins: [require("daisyui")],
} 