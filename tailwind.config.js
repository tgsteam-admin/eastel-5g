/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-neon-pink', 'bg-neon-cyan', 'bg-neon-gold', 'bg-neon-purple', 'bg-neon-green', 'bg-neon-blue',
    'text-neon-pink', 'text-neon-cyan', 'text-neon-gold', 'text-neon-purple', 'text-neon-green', 'text-neon-blue',
    'border-neon-pink', 'border-neon-cyan', 'border-neon-gold', 'border-neon-purple', 'border-neon-green', 'border-neon-blue',
    'neon-glow-pink', 'neon-glow-cyan', 'neon-glow-gold', 'neon-glow-purple', 'neon-glow-green', 'neon-glow-blue',
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-hanken)', 'sans-serif'],
      },
      colors: {
        'neon-pink': '#FF00FF',
        'neon-cyan': '#00FFFF',
        'neon-gold': '#FFCC00',
        'neon-purple': '#BF00FF',
        'neon-green': '#39FF14',
        'neon-blue': '#4D4DFF',
        'background': '#050A1A',
      },
    },
  },
  plugins: [],
}
