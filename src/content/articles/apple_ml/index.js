import Loadable from 'react-loadable'

import imageCover from '../../../assets/acastro_180510_1777_siri_0002.0.jpg'

const body = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [{ name: 'Nick Statt', url: 'https://theverge.com' }],
  genre: 'Technology',
  subgenre: 'Tech News',
  description:
    'Recent hire John Giannandrea is leading all of Apple’s AI efforts now',
  imageCover,
  imageCredits: 'Illustration by Alex Castro / The Verge',
  body,
  publishedAt: new Date('2018-07-20'),
  tags: ['Apple', 'machine learning'],
  themeName: 'DAY',
  themeColor: 'purple',
  title:
    'Apple’s new AI chief now oversees Siri, Core ML, and machine learning teams',
}
