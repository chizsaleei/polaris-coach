/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind v4 PostCSS plugin
    '@tailwindcss/postcss': {},
    // Vendor prefixes
    autoprefixer: {},
  },
}

export default config
