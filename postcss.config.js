module.exports = ({ env }) => ({
  plugins: {
    stylelint: env === 'production' ? false : {},
    colorguard: env === 'production' ? false : {},
    'postcss-placehold': env === 'production' ? false : {},
    'postcss-font-magician': {},
    'rucksack-css': {},
    'postcss-utilities': {
      centerMethod: 'flexbox',
    },
    'postcss-hocus': {},
    'postcss-browser-reporter': env === 'production' ? false : {},
    'postcss-combine-duplicated-selectors': env === 'production' ? {} : false,
    'css-mqpacker': env === 'production' ? {} : false,
    'postcss-flexbugs-fixes': env === 'production' ? {} : false,
    'postcss-unprefix': env === 'production' ? {} : false,
    cssnano: env === 'production' ? {
      preset: [
        'advanced',
      ],
    } : false,
    autoprefixer: env === 'production' ? {} : false,
  },
});
