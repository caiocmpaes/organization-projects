const path    = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch', './js/components/HotReloadApp.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'js/[name].min.js',
    publicPath: 'http://localhost:5001/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', ['es2015', { modules: false }], 'stage-2'],
              plugins: ['emotion', 'react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=fonts/[name].[hash:20].[ext]'
      },
      {
        test: /\.(gif|png)$/,
        use: 'file-loader?name=images/[name].[hash:20].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.GITHUB_OAUTH_TOKEN': JSON.stringify(process.env.GITHUB_OAUTH_TOKEN)
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    publicPath: 'http://localhost:5001/',
    port: 5001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
