export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: ["poppins-light", "Arial", "sans-serif"],
        poppinsRegular: ["poppins-regular", "Arial", "sans-serif"],
        poppinsBold: ["poppins-bold", "Arial", "sans-serif"],
        suraMedium: ["sura-regular", "serif"],
        suraBold: ["sura-bold", "serif"],
      },

      textColor: {
        light: "hsla(var(--light) / <alpha-value>)",
        dark: "hsla(var(--dark) / <alpha-value>)",
        body: "hsla(var(--body) / <alpha-value>)",
        accent: "hsla(var(--accent) / <alpha-value>)",
      },
      backgroundColor: {
        light: "hsla(var(--light) / <alpha-value>)",
        dark: "hsla(var(--dark) / <alpha-value>)",
        body: "hsla(var(--body) / <alpha-value>)",
        accent: "hsla(var(--accent) / <alpha-value>)",
      },

      borderColor: {
        light: "hsla(var(--light) / <alpha-value>)",
        dark: "hsla(var(--dark) / <alpha-value>)",
        body: "hsla(var(--body) / <alpha-value>)",
        accent: "hsla(var(--accent) / <alpha-value>)",
      },

      stroke: {
        light: "hsla(var(--light) / <alpha-value>)",
        dark: "hsla(var(--dark) / <alpha-value>)",
        body: "hsla(var(--body) / <alpha-value>)",
        accent: "hsla(var(--accent) / <alpha-value>)",
      },

      fill: {
        light: "hsla(var(--light) / <alpha-value>)",
        dark: "hsla(var(--dark) / <alpha-value>)",
        body: "hsla(var(--body) / <alpha-value>)",
        accent: "hsla(var(--accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
