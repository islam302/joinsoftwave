/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { 
      center: true, 
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem"
      },
      screens: { 
        sm: "640px",
        md: "768px", 
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      } 
    },
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      colors: {
        primary: "#0E2A47",
        primary2: "#112F54",
        brand: "var(--brand)",
        "brand-secondary": "var(--brand-secondary)",
        accent: "var(--accent)",
        "accent-secondary": "var(--accent-secondary)",
        textDim: "#FFFFFF",
      },
      boxShadow: {
        card: "0 6px 30px rgba(0,0,0,0.25)",
        soft: "0 10px 40px rgba(0,212,255,0.15)",
        glow: "0 0 20px rgba(0,212,255,0.3)",
        "glow-lg": "0 0 40px rgba(0,212,255,0.4)",
        modern: "0 8px 32px rgba(0, 0, 0, 0.1)",
        "modern-hover": "0 20px 40px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(900px 500px at 70% -10%, rgba(0,212,255,0.25), transparent 60%), radial-gradient(800px 400px at 15% 20%, rgba(0,212,255,0.15), transparent 60%)",
        "gradient-primary": "linear-gradient(135deg, #0B223A 0%, #1a365d 50%, #0B223A 100%)",
        "gradient-brand": "linear-gradient(135deg, var(--brand), var(--brand-secondary))",
        "gradient-accent": "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 15s ease infinite",
        "particle-float": "particle-float 20s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "particle-float": {
          "0%": {
            transform: "translateY(100vh) rotate(0deg)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(-100px) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
