import React from 'react'

import LatestMusic from '../ContentHighlight/LatestMusic'
import LatestArticle from '../ContentHighlight/LatestArticle'

import Hero from './Hero'

export default () => (
  <>
    <Hero />
    <LatestArticle
      marginTop={{ xs: 'xr', md: 'md' }}
      marginBottom={{ xs: 'xr', md: 'md' }}
    />
    <LatestMusic marginBottom={{ xs: 'xr', md: 'md' }} />
  </>
)
