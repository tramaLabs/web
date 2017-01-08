import React, { Component, PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { Snack } from 'containers'
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title="Trama"
            meta={[
              { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' },
              { property: 'og:site_name', content: 'Trama' },
              { property: 'og:image', content: 'https://diegohaz.github.io/arc/thumbnail.png' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '630' }
            ]}
            link={[
              { rel: 'icon', href: 'https://diegohaz.github.io/arc/icon.png' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700' }
            ]} />
          {children}
          <Snack light />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
