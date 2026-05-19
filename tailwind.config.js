/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050814",
        ink: "#090e1f",
        electric: "#25a7ff",
        cyanGlow: "#6ae8ff",
        steel: "#94a3b8"
      },
      boxShadow: {
        glow: "0 0 70px rgba(37, 167, 255, 0.24)",
        card: "0 18px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "radial-tech": "radial-gradient(circle at top left, rgba(37,167,255,.18), transparent 32%), radial-gradient(circle at 80% 20%, rgba(106,232,255,.12), transparent 30%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        reveal: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: 0.45 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        reveal: "reveal .7s ease both",
        pulseLine: "pulseLine 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
