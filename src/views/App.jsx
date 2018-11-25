import React, { Component } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/tag'
import MathJax from 'react-mathjax2'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MDDefaults from '../components/MarkdownDefaults'
import Footer from './Footer'
import Home from './Home/Loadable'
import Music from './Music/Loadable'
import Articles from './Articles/Loadable'
import Article from './Article/Loadable'
import About from './About/Loadable'
import Navigation from './Navigation'
import GlobalStyles from '../styles/Global'
import { DAY } from '../styles/color'

// const theme

export default class App extends Component {
  defaultTheme = DAY

  state = { theme: this.defaultTheme }

  setTheme = theme => {
    this.setState({ theme })
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
                <GlobalStyles />
                {/* <MetaTags /> */}
                <Navigation />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/music" component={Music} />
                  <Route exact path="/articles" component={Articles} />
                  <Route exact path="/articles/:id" component={Article} />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
                <Footer />
              </MDXProvider>
            </MathJax.Context>
          </ThemeProvider>
        </HelmetProvider>
      </Router>
    )
  }
}
