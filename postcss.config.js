module.exports = ({ options }) => {
  return {
    plugins: {
      stylelint: options.env === 'production' ? false : {},
      colorguard: options.env === 'production' ? false : {},
      'postcss-placehold': options.env === 'production' ? false : {},
      'postcss-font-magician': {},
      'rucksack-css': {},
      'postcss-utilities': {
        centerMethod: 'flexbox',
      },
      'postcss-hocus': {},
      'postcss-browser-reporter': options.env === 'production' ? false : {},
      'postcss-combine-duplicated-selectors': options.env === 'production' ? {} : false,
      'css-mqpacker': options.env === 'production' ? {} : false,
      'postcss-flexbugs-fixes': options.env === 'production' ? {} : false,
      'postcss-unprefix': options.env === 'production' ? {} : false,
      autoprefixer: options.env === 'production' ? {} : false,
      cssnano: options.env === 'production' ? {} : false,
    },
  };
};
