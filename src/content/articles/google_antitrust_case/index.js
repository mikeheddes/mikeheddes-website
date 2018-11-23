import Loadable from 'react-loadable'

import imageCover from '../../../assets/googleDroid.jpg'

const loadablePost = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [{ name: 'Chaim Gartenberg', url: 'https://theverge.com' }],
  categorie: 'Technology',
  description: 'The $5 billion question(s)',
  imageCover,
  imageCredits: 'Illustration by William Joel / The Verge',
  loadablePost,
  publishedAt: new Date('2018-07-19'),
  tags: ['Google', 'Antitrust'],
  theme: 'DAY',
  themeColor: 'yellow',
  title:
    'Six questions you were afraid to ask about Google’s EU antitrust case',
  updatedAt: null,
}
