/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C4DFF",
        "primary-light": "#EDE7F6",
        "primary-dark": "#651FFF",
        accent: "#FF80AB",
        success: "#4CAF50",
        error: "#F44336",
        "gray-50": "#fafafa",
        "gray-100": "#f5f5f5",
        "gray-200": "#eeeeee",
        "gray-300": "#e0e0e0",
        "gray-600": "#757575",
        "gray-700": "#616161",
      },
      borderRadius: {
        radius: "12px",
        "radius-lg": "16px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.08)",
        md: "0 4px 12px rgba(0,0,0,0.1)",
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
