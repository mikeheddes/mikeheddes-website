import React from 'react'

import Hero from '../views/Home/Hero'
import LatestArticle from '../views/ContentHighlight/LatestArticle'
import LatestMusic from '../views/ContentHighlight/LatestMusic'

export default () => (
  <React.Fragment>
    <Hero />
    <LatestArticle
      marginTop={{ xs: 'xr', md: 'md' }}
      marginBottom={{ xs: 'xr', md: 'md' }}
    />
    <LatestMusic marginBottom={{ xs: 'xr', md: 'md' }} />
  </React.Fragment>
)