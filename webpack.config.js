const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    context: path.resolve(__dirname),
    entry: {
      index: [
        '@js/index.js',
        '@scss/index.scss',
      ],
    },
    module: {
      rules: [{
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src/'),
          loader: 'eslint-loader',
          options: {
            cache: true,
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src/'),
          ],
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          exclude: path.resolve(__dirname, 'node_modules/'),
          include: path.resolve(__dirname, 'src/'),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    env: env.NODE_ENV,
                  },
                },
              },
            }],
          }),
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
      }),
      new ExtractTextPlugin('[name].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity,
      }),
    ],
    recordsPath: path.join(__dirname, 'dist/webpack.records.json'),
    resolve: {
      alias: {
        '@js': 'js/',
        '@scss': 'scss/',
      },
      extensions: [
        '.js',
        '.scss',
      ],
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src/'),
      ],
    },
  };
};
