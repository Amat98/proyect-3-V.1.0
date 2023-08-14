/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fira': ['Fira Code', 'monospace']
    },
    extend: {
      backgroundImage: {
        'portal': "url(/img/portal.png)"
      },
    },
  },
  plugins: [],
}

