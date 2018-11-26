import React from 'react'
import Helmet from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import Banner from '../Banner'
import LatestArticle from '../ContentHighlight/LatestArticle'
import ContentGrid from '../ContentGrid/Loadable'
import Card from '../../components/Card'
import articles from '../../content/articles'

const sortedArticles = Object.values(articles).sort(
  (a, b) => b.publishedAt - a.publishedAt
)

const bannerLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/mikeheddes',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@mikeheddes',
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/mikeheddesb203',
  },
]

const color = 'orange'

const setTheme = theme => ({
  ...theme,
  link: theme[color],
  surface: theme.surfaceColors[color],
})

const Articles = () => (
  <ThemeProvider theme={setTheme}>
    <React.Fragment>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <Banner actions={bannerLinks} eyebrow="Articles">
        Interesting Ideas
        <br />
        Worth Reading.
      </Banner>
      <LatestArticle marginTop={{ xs: 'xr', md: 'md' }} />
      <ContentGrid
        content={sortedArticles}
        title="All articles"
        columns={{ xs: 1, sm: 2, lg: 3 }}
      >
        {item => (
          <Card
            key={item.id}
            title={item.title}
            maxTitleLines={2}
            maxDescriptionLines={3}
            image={item.imageCover}
            size="md"
            preload={item.body.preload}
            url={item.url}
          />
        )}
      </ContentGrid>
    </React.Fragment>
  </ThemeProvider>
)

export default Articles
