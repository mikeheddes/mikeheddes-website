import React from 'react'
import Loadable from 'react-loadable'
import { themes } from 'actions/ui'

import imageCover from 'assets/gift-guide.jpg'

const loadablePost = Loadable({
  loader: () => import('./article.mdx'),
  loading: () => <div />,
})

// Metadata
export default {
  authors: [{ name: 'Verge Staff', url: 'https://theverge.com' }],
  categorie: 'CODE',
  description: '',
  id: 'verge_holiday_gift_guide_2017',
  imageCover,
  imageCredits: 'Photo by The Verge',
  loadablePost,
  publishedAt: new Date('2018-07-14'),
  tags: ['holiday', 'gifts'],
  theme: themes.DAY,
  themeColor: 'purple',
  title: 'The Verge holiday gift guide 2017',
  updatedAt: null,
}
