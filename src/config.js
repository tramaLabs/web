import merge from 'lodash/merge'

const browser = typeof window !== 'undefined'
const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000

// istanbul ignore next
const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    baseUrl: `http://${ip}:${port}`,
    apiUrl: `https://trama-rest.herokuapp.com`,
    fbAppId: '577773279089224',
    browser,
    ip,
    port
  },
  test: {},
  development: {},
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    baseUrl: 'https://trama-web.herokuapp.com',
    apiUrl: 'https://trama-rest.herokuapp.com',
    fbAppId: '534673583399194'
  }
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
