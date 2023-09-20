export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
// postcss.config.js
module.exports = {
  plugins: [require('postcss-apply')],
};

