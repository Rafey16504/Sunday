/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      'grotesk': ['"Familjen Grotesk"'],
      'ubuntu': ['"Ubuntu"'],
      'oswald': ['"Oswald"'],
      'inter': ['"Inter"'],
      'shalimar': ['"Shalimar"']
    },
    
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }},
  },
  plugins: [],
}

