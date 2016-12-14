import React from 'react'
import serialize from 'serialize-javascript'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import csrf from 'csurf'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import cookie from 'react-cookie'
import express from 'services/express'
import routes from 'routes'
import configureStore from 'store/configure'
import { env, port, ip } from 'config'
import { setCsrfToken } from 'store/actions'
import Html from 'components/Html'
import api from 'services/api'

const router = new Router()

router.use(csrf({ cookie: true }))

router.use((req, res, next) => {
  if (env === 'development') {
    global.webpackIsomorphicTools.refresh()
  }

  cookie.setRawCookie(req.headers.cookie)
  const token = cookie.load('token')
  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore({ auth: { token } }, memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  token && api.setToken(token)

  store.dispatch(setCsrfToken(req.csrfToken()))

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    }

    if (error || !renderProps) {
      return next(error)
    }

    const fetchData = () => new Promise((resolve, reject) => {
      const method = req.method.toLowerCase()
      const { params, location, components } = renderProps
      const promises = []

      components.forEach((component) => {
        const args = { req, res, params, location, store }
        while (component && !component.all && !component[method]) {
          component = component.WrappedComponent
        }
        component && component.all && promises.push(component.all(args))
        component && component[method] && promises.push(component[method](args))
      })

      Promise.all(promises).then(resolve).catch(reject)
    })

    const render = (store) => {
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
      const initialState = store.getState()
      const assets = global.webpackIsomorphicTools.assets()
      const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
      const markup = <Html {...{ styles, assets, state, content }} />
      const doctype = '<!doctype html>\n'
      const html = renderToStaticMarkup(markup)

      res.send(doctype + html)
    }

    fetchData().then(() => {
      render(configureStore(store.getState(), memoryHistory))
    }).catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  })
})

const app = express(router)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on http://${ip}:${port}`)
  }
})

export default app
