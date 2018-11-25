import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import Banner from '../Banner'
// import ContentHighlight from 'containers/ContentHighlight/Loadable'
// import ContentGrid from 'containers/ContentGrid/Loadable'
// import Card from 'components/Card'
import { colorNames } from '../../styles/color'
// import { visibilities } from 'actions/articles'
// import { contentTypes } from 'actions/content'

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

export default class ArticlesOverview extends Component {
  static propTypes = {
    bannerLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    color: PropTypes.oneOf(colorNames),
    // match: PropTypes.shape({
    //   params: PropTypes.shape({
    //     contentType: PropTypes.oneOf(contentTypes).isRequired,
    //   }).isRequired,
    // }).isRequired,
  }

  static defaultProps = {
    color: 'orange',
    bannerLinks: [
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
    ],
  }

  setTheme = theme => {
    const { color } = this.props
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    }
  }

  render() {
    const { bannerLinks } = this.props
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Helmet>
            <title>Articles</title>
          </Helmet>
          <Banner actions={bannerLinks} eyebrow="Articles">
            Interesting Ideas
            <br />
            Worth Reading.
          </Banner>
          {/* <ContentHighlight
            noFetch
            eyebrow="Latest article"
            highlightType="latest"
            contentType={contentType}
            actionTitle="Read more"
            marginTop
            />
            <ContentGrid
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
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
