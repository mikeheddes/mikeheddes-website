import Loadable from 'react-loadable'

import imageCover from '../../../assets/appleOled.jpg'

const loadablePost = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [{ name: 'Shannon Liao', url: 'https://theverge.com' }],
  categorie: 'Technology',
  description: 'For the iPhone X and future iPhones with OLED displays',
  imageCover,
  imageCredits: 'Photo by The Verge',
  loadablePost,
  publishedAt: new Date('2018-06-30'),
  tags: ['iPhone', 'Apple'],
  theme: 'DAY',
  themeColor: 'pink',
  title:
    'Apple to reportedly get its OLED displays from LG to reduce reliance on Samsung',
  updatedAt: null,
}
