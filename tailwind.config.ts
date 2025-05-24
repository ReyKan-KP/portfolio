import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-random': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(10px, -10px)' },
          '40%': { transform: 'translate(-15px, 15px)' },
          '60%': { transform: 'translate(7px, 7px)' },
          '80%': { transform: 'translate(-5px, -5px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)', transform: 'scale(1)' },
          '50%': { filter: 'brightness(1.5)', transform: 'scale(1.05)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
        'spin-reverse': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slowest': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-delayed': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-delayed': 'twinkle 3s ease-in-out infinite 1.5s',
        'float': 'float 6s ease-in-out infinite',
        'float-random': 'float-random 10s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'glow-delayed': 'glow 4s ease-in-out infinite 2s',
        'glow-slow': 'glow 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config