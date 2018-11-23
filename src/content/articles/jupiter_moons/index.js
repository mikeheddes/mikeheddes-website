import Loadable from 'react-loadable'

import imageCover from '../../../assets/14_jupiter_carousel_1.0.jpg'

const body = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [{ name: 'Loren Grush', url: 'https://theverge.com' }],
  categorie: 'Science & Medicine',
  description: 'The total is up to 79 now',
  imageCover,
  imageCredits:
    'Image: NASA/JPL-Caltech/SwRI/MSSS/Gerald Eichstädt and Seán Doran',
  body,
  publishedAt: new Date('2018-07-17'),
  tags: ['NASA', 'Jupiter', 'moons'],
  theme: 'NIGHT',
  themeColor: 'orange',
  title:
    'Astronomers have found a new crop of moons around Jupiter, and one of them is a weirdo',
  updatedAt: null,
}
