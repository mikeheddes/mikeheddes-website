import Loadable from 'react-loadable'

import imageCover from '../../../assets/googleDroid.jpg'

const body = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [{ name: 'Chaim Gartenberg', url: 'https://theverge.com' }],
  genre: 'Technology',
  subgenre: 'Tech News',
  description: 'The $5 billion question(s)',
  imageCover,
  imageCredits: 'Illustration by William Joel / The Verge',
  body,
  publishedAt: new Date('2018-07-19'),
  tags: ['Google', 'Antitrust'],
  themeName: 'DAY',
  themeColor: 'yellow',
  title:
    'Six questions you were afraid to ask about Google’s EU antitrust case',
  updatedAt: new Date('2018-11-23'),
}
