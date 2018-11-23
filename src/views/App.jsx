import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/tag'
// import MathJax from 'react-mathjax2'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MDDefaults from '../components/MarkdownDefaults'
import Footer from './Footer'
import Home from './Home/Loadable'
import Music from './MusicOverview/Loadable'
import Articles from './ArticlesOverview/Loadable'
import About from './About/Loadable'
import Navigation from './Navigation'
import GlobalStyles from '../styles/Global'
import { DAY } from '../styles/color'

const App = () => (
  <Router>
    <HelmetProvider>
      <ThemeProvider theme={DAY}>
        {/* <MathJax.Context
          input="tex"
          options={{
            showMathMenu: false,
            showProcessingMessages: false,
            messageStyle: 'none',
            tex2jax: { preview: 'none' },
          }}
        > */}
        <MDXProvider components={MDDefaults}>
          <GlobalStyles />
          {/* <MetaTags /> */}
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/articles" component={Articles} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </MDXProvider>
        {/* </MathJax.Context> */}
      </ThemeProvider>
    </HelmetProvider>
  </Router>
)

export default App
