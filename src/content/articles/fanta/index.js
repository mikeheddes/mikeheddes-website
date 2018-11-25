import Loadable from 'react-loadable'

import imageCover from '../../../assets/91bd3965372789.5b35307b5609e.png'

const body = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [
    { name: 'Lorena Restrepo', url: 'https://behance.com' },
    { name: 'Alexa Rodríguez', url: 'https://behance.com' },
  ],
  genre: 'Art',
  subgenre: 'Design',
  imageCover,
  body,
  publishedAt: new Date('2018-07-19'),
  tags: ['Artdirection', 'Reclame', 'Fotografie'],
  themeName: 'NIGHT',
  themeColor: 'pink',
  title: 'Stay FANTA',
}
