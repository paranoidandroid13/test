const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const NotifierPlugin = require('webpack-notifier')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      pages: path.resolve(__dirname, 'src/client/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, 'src/scss/index.scss')
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    // каждый раз при сборке используем готовый html
    // с точкой монтирования для реакта
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 8080,
    //   openAnalyzer: true
    // }),
    new NotifierPlugin({ alwaysNotify: false }),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true
  }
}

console.log(__dirname)
console.log(path.resolve(__dirname, 'src/client/pages/'))
