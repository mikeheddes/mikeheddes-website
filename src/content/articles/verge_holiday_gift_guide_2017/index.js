import Loadable from 'react-loadable'

import imageCover from '../../../assets/gift-guide.jpg'

const body = Loadable({
  loader: () => import('./article.mdx'),
  loading: () => null,
})

export default {
  authors: [{ name: 'Verge Staff', url: 'https://theverge.com' }],
  categorie: 'Technology',
  description: '',
  imageCover,
  imageCredits: 'Photo by The Verge',
  body,
  publishedAt: new Date('2018-07-14'),
  tags: ['holiday', 'gifts'],
  theme: 'DAY',
  themeColor: 'purple',
  title: 'The Verge holiday gift guide 2017',
  updatedAt: null,
}
