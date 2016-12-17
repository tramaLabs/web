const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const base = require('./webpack.base.babel')
const stats = require('./stats')

const server = Object.assign({}, base, {
  devtool: '#inline-source-map',
  name: 'server',
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  externals: [nodeExternals()],
  entry: {
    server: path.join(__dirname, '../src/server')
  },
  output: Object.assign({}, base.output, {
    filename: '../[name].js',
    libraryTarget: 'commonjs2'
  }),
  plugins: base.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'global.stats': JSON.stringify(stats.load())
    })
  ])
})

module.exports = server
