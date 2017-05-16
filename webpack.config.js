const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, 'js', 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react', 'stage-0'] },
        }],
        include: path.join(__dirname, 'js'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(eot|png|gif|woff2|woff|ttf|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  externals: {
    fs: '{}',
  },
  devServer: {
    hot: true,
    historyApiFallback: {
      index: '/dist/',
    },
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
  },
}
