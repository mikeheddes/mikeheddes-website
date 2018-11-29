import React, { Component } from 'react'
import Helmet from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-static'
import { Route, Switch } from 'react-router-dom'

import MDDefaults from '../components/MarkdownDefaults'
import Footer from './Footer'
import Home from './Home/Loadable'
import MusicOverview from './MusicOverview/Loadable'
import MusicItem from './MusicItem/Loadable'
import Articles from './Articles/Loadable'
import Article from './Article/Loadable'
import About from './About/Loadable'
import Navigation from './Navigation'
import MetaTags from '../components/MetaTags'
import GlobalStyles from '../styles/Global'
import { DAY, NIGHT } from '../styles/color'

class App extends Component {
  defaultTheme = DAY

  themeLookup = {
    DAY,
    NIGHT,
  }

  state = { theme: this.defaultTheme }

  setTheme = themeName => {
    this.setState({ theme: this.themeLookup[themeName] || this.defaultTheme })
  }

  setDefaultTheme = () => {
    this.setState({ theme: this.defaultTheme })
  }

  render() {
    const { theme } = this.state
    const themeFuncs = {
      setTheme: this.setTheme,
      setDefaultTheme: this.setDefaultTheme,
    }
    return (
      <Router>
        <ThemeProvider theme={{ ...theme, ...themeFuncs }}>
          <MDXProvider components={MDDefaults}>
            <Helmet defaultTitle="Mike Heddes" titleTemplate="Mike Heddes | %s">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
                type="text/css"
                defer
                integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y"
                crossOrigin="anonymous"
              />
            </Helmet>
            <GlobalStyles />
            <MetaTags />
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/music" component={MusicOverview} />
              <Route exact path="/music/:id" component={MusicItem} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/articles/:id" component={Article} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
          </MDXProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
