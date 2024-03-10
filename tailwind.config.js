/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{ts,tsx}", "./src/components/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 2s ease 300ms",
      },
    },
  },
  plugins: [],
};
