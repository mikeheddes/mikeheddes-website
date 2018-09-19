import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/tag'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Home from 'containers/Home/Loadable'
import About from 'containers/About/Loadable'
import NoMatch from 'components/NoMatch'
import Footer from 'components/Footer'
import components from 'components/Markdown'
import Navigation from 'containers/Navigation'
import Curtain from 'containers/Curtain'
import { DAY, NIGHT } from 'style/color'
import { THEME_DAY, THEME_NIGHT } from 'actions/ui'
import ContentRouter from 'containers/ContentRouter'
import { contentTypes } from 'actions/content'
import MetaTags from 'components/MetaTags'
import GlobalStyle from 'style/GlobalStyle'

import mapState from './mapState'

const themes = {
  [THEME_DAY]: DAY,
  [THEME_NIGHT]: NIGHT,
}

const App = ({ themeName }) => (
  <ThemeProvider theme={themes[themeName]}>
    <MDXProvider components={components}>
      <>
        <GlobalStyle />
        <MetaTags />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            path={`/:contentType(${contentTypes.join('|')})`}
            component={ContentRouter}
          />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
        <Curtain />
      </>
    </MDXProvider>
  </ThemeProvider>
)

App.propTypes = {
  themeName: PropTypes.string.isRequired,
}

export default withRouter(mapState(App))
