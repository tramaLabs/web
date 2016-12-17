const path = require('path')
const webpack = require('webpack')

const ip = process.env.IP || '0.0.0.0'
const port = (+process.env.PORT + 1) || 3001
const dev = process.env.NODE_ENV !== 'production'

const base = {
  devtool: 'eval',
  resolve: {
    modulesDirectories: ['src', 'node_modules']
  },
  output: {
    path: path.join(__dirname, '../dist/public'),
    publicPath: dev ? 'http://' + ip + ':' + port + '/' : '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.png$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/jpeg' },
      { test: /\.woff$/, loader: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff2' },
      { test: /\.ttf$/, loader: 'file?prefix=fonts/' },
      { test: /\.eot$/, loader: 'file?prefix=fonts/' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = base
