import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'
import { env } from 'config'

const root = path.join(__dirname, '../../..')

export default (routes) => {
  const app = express()

  // istanbul ignore next
  if (env === 'production') {
    app.use('*', (req, res, next) => {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''))
      }
      return next()
    })
  }

  // istanbul ignore next
  if (env === 'production' || env === 'development') {
    app.use(compression())
    app.use(morgan('dev'))
    app.use(cookieParser())
    app.use(express.static(path.join(root, 'dist')))
  }

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(routes)

  return app
}
