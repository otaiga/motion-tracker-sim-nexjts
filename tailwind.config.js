module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "scenario 40s linear infinite",
        "slow-ping": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "slow-pulse": "pulse-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        scenario: "scenario 10s ease-in-out infinite",
      },
      keyframes: {
        scenario: {
          "0%, 100%": { transform: "rotate(-45deg)" },
          "50%": { transform: "rotate(45deg)" },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: 0.2,
          },
          "50%": {
            opacity: 0.8,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
