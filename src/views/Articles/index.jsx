import React from 'react'
import Helmet from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import Banner from '../Banner'
import LatestArticle from '../ContentHighlight/LatestArticle'
// import ContentGrid from 'containers/ContentGrid/Loadable'
// import Card from 'components/Card'

// const filters = [
//   {
//     name: 'All articles',
//     action: visibilities.all,
//   },
//   {
//     name: 'Code',
//     action: visibilities.code,
//   },
//   {
//     name: 'Design',
//     action: visibilities.design,
//   },
//   {
//     name: 'Travel',
//     action: visibilities.travel,
//   },
// ]

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
    <>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <Banner actions={bannerLinks} eyebrow="Articles">
        Interesting Ideas
        <br />
        Worth Reading.
      </Banner>
      <LatestArticle
        marginTop={{ xs: 'xr', md: 'md' }}
        marginBottom={{ xs: 'xr', md: 'md' }}
      />
      {/*  <ContentGrid
            contentType={contentType}
            title="All articles"
            filters={filters}
            phoneColumns={1}
            tabletPortraitColumns={2}
            tabletLandscapeColumns={2}
            desktopColumns={3}
            >
            {items =>
              items.map(item => (
            <Card
            key={item.id}
            title={item.title}
            maxTitleLines={2}
            maxDescriptionLines={3}
            image={item.imageCover}
            size="m"
            preload={item.loadablePost.preload}
            to={`/${contentType}/${item.id}`}
            />
              ))
            }
          </ContentGrid> */}
    </>
  </ThemeProvider>
)

export default Articles
