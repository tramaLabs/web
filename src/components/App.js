import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { Snack } from 'containers'
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
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
            { rel: 'icon', href: 'http://trama.net.br/wp-content/uploads/2017/03/cropped-favicon-32x32.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700' }
          ]}
        />
        {children}
        <Snack reverse />
      </div>
    </ThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.any
}

export default App
