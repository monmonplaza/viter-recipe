const colors = [
  "light",
  "dark",
  "body",
  "accent",
  "alert",
  "warning",
  "info",
  "success",
  "skeleton",
];

const colorObject = colors.reduce((acc, color) => {
  acc[color] = `hsla(var(--${color}) / <alpha-value>)`;
  return acc;
}, {});

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

      textColor: colorObject,
      backgroundColor: colorObject,
      borderColor: colorObject,
      stroke: colorObject,
      fill: colorObject,

      backgroundImage: {
        skeleton:
          "linear-gradient(90deg, transparent, bg-gray-200, .8), transparent )",
      },
    },

    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "60" },
      },
      slideRight: {
        "0%": { right: "-100%", opacity: 0 },
        "100%": { right: "0%", opacity: 1 },
      },
      slideUp: {
        "0%": { top: "55%", opacity: 0 },
        "100%": { top: "50%", opacity: 1 },
      },
      rotate: {
        "100%": { transform: "rotate(360deg)" },
      },
      loading: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(100%)" },
      },
    },

    animation: {
      rotate: "rotate 2s linear infinite",
      loading: "loading 1.5s ease-in infinite",
      fadeIn: "fadeIn .3s ease-in",
      slideRight: "slideRight .2s linear ",
      slideUp: "slideUp .2s linear ",
    },
  },
  plugins: [],
};
