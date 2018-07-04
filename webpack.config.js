const path = require('path')
const slsw = require('serverless-webpack')
const webpack = require('webpack')
const UgligyJSPlugin = require('uglifyjs-webpack-plugin')

const getEnvironment = () => (
  slsw.lib.webpack.isLocal ? 'development' : 'production'
)

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(getEnvironment())
  })
]

if (getEnvironment() === 'production') {
  plugins.push(new UgligyJSPlugin())
}

module.exports = {
  mode: getEnvironment(),
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-2', ['es2015', { modules: false }]]
          }
        }
      },
      {
        test: /\.(pug)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'pug-loader',
          options: {
            self: true
          }
        }
      },
    ]
  },
  resolve: {
    alias: {
      hiredis: path.join(__dirname, 'node_modules', 'compredesconte-utils', 'null.js')
    }
  },
  plugins
}
