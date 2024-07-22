/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Montserrat'],
      },
      colors: {
        primary: {
          main: '#FFFFFF',
          gradient_purple: '#999999',
          gradient_yellow: '#CCCCCC',
          gradient_blue: '#00FFD1',
          logo:"#FF8A00"
        },
        res: {
          pos: '#00FF1A',
          neg: '#FF4F4F',
        },
        background: {
          default: '#000000',
          alt: '#212121',
          alt2: '#FFFFFF',
        },
      },
      backgroundImage: theme => ({
        'custom-radial': 'radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)',
      }),
      borderRadius: {
        // Define border radius values if needed
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}