import React, { Component } from 'react'
import Helmet, { HelmetProvider } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/tag'
import MathJax from 'react-mathjax2'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MDDefaults from '../components/MarkdownDefaults'
import Footer from './Footer'
import Home from './Home/Loadable'
import MusicOverview from './MusicOverview/Loadable'
import MusicItem from './MusicItem/Loadable'
import Articles from './Articles/Loadable'
import Article from './Article/Loadable'
import About from './About/Loadable'
import Navigation from './Navigation'
import ResetPagePosition from '../components/ResetPagePosition'
import MetaTags from '../components/MetaTags'
import GlobalStyles from '../styles/Global'
import { DAY, NIGHT } from '../styles/color'

// const theme

export default class App extends Component {
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
        <HelmetProvider>
          <ThemeProvider theme={{ ...theme, ...themeFuncs }}>
            <MathJax.Context
              input="tex"
              options={{
                showMathMenu: false,
                showProcessingMessages: false,
                messageStyle: 'none',
                tex2jax: { preview: 'none' },
              }}
            >
              <MDXProvider components={MDDefaults}>
                <Helmet
                  defaultTitle="Mike Heddes"
                  titleTemplate="Mike Heddes | %s"
                />
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
                <ResetPagePosition />
              </MDXProvider>
            </MathJax.Context>
          </ThemeProvider>
        </HelmetProvider>
      </Router>
    )
  }
}
