import React from 'react'
import Loadable from 'react-loadable'
import { themes } from 'actions/ui'

import imageCover from 'assets/ica-cover.jpg'

imageCover.alt = 'Aerial view of a crossroad in Shah Alam, Malaysia'

const loadablePost = Loadable({
  loader: () => import('./article.mdx'),
  loading: () => <div />,
})

// Metadata
export default {
  authors: [
    { name: 'Mike Heddes', url: 'https://mikeheddes.nl' },
    { name: 'Niels Gräfe' },
  ],
  categorie: 'CODE',
  description: 'Minimize waiting time for traffic lights.',
  id: 'intersection_control',
  imageCover,
  imageCredits: 'Photo by Firdouss Ross on Unsplash',
  loadablePost,
  publishedAt: new Date('2018-01-08'),
  tags: ['traffic', 'V2I'],
  theme: themes.DAY,
  themeColor: 'red',
  title: 'Intersection Control Algorithm',
  updatedAt: null,
}
