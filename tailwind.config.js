module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00B894",
          dark: "#019170",
        },
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.35)",
      },
    },
  },
  plugins: [],
};
