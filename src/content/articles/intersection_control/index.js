import Loadable from 'react-loadable'

import imageCover from '../../../assets/ica-cover.jpg'

const body = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [
    { name: 'Mike Heddes', url: 'https://mikeheddes.nl' },
    { name: 'Niels Gräfe' },
  ],
  genre: 'Education',
  subgenre: 'Higher Education',
  description: 'Minimize waiting for traffic lights',
  imageCover,
  imageCredits: 'Photo by Firdouss Ross on Unsplash',
  body,
  publishedAt: new Date('2018-01-08'),
  tags: ['traffic', 'V2I'],
  theme: 'DAY',
  themeColor: 'red',
  title: 'Intersection Control Algorithm',
}
