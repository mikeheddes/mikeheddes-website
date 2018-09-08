import React from 'react'
import Loadable from 'react-loadable'
import { themes } from 'actions/ui'

import imageCover from 'assets/appleOled.jpg'

const loadablePost = Loadable({
  loader: () => import('./article.mdx'),
  loading: () => <div />,
})

// Metadata
export default {
  authors: [{ name: 'Shannon Liao', url: 'https://theverge.com' }],
  categorie: 'CODE',
  description: 'For the iPhone X and future iPhones with OLED displays',
  id: 'apple_get_its_oled_displays_from_lg',
  imageCover,
  imageCredits: 'Photo by The Verge',
  loadablePost,
  publishedAt: new Date('2018-06-30'),
  tags: ['iPhone', 'Apple'],
  theme: themes.DAY,
  themeColor: 'pink',
  title:
    'Apple to reportedly get its OLED displays from LG to reduce reliance on Samsung',
  updatedAt: null,
}
