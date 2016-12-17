const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base.babel')
const stats = require('./stats')

const dev = process.env.NODE_ENV !== 'production'

const client = Object.assign({}, base, {
  name: 'client',
  entry: {
    app: ['babel-polyfill', path.join(__dirname, '../src/client')]
  },
  output: Object.assign({}, base.output, {
    filename: '[name].[hash].js'
  }),
  plugins: base.plugins.concat([
    function () {
      this.plugin('done', (statsData) => {
        stats.save(statsData)
      })
    }
  ])
})

if (dev) {
  client.entry.app.unshift(
    `webpack-dev-server/client?${base.output.publicPath}`,
    'webpack/hot/dev-server',
    'react-hot-loader/patch'
  )

  client.plugins = client.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
} else {
  client.plugins = client.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ])
}

module.exports = client
