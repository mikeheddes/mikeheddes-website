import Loadable from 'react-loadable'

import imageCover from '../../../assets/ica-cover.jpg'

imageCover.alt = 'Aerial view of a crossroad in Shah Alam, Malaysia'

const loadablePost = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [
    { name: 'Mike Heddes', url: 'https://mikeheddes.nl' },
    { name: 'Niels Gräfe' },
  ],
  categorie: 'Science & Medicine',
  description: 'Minimize waiting time for traffic lights.',
  imageCover,
  imageCredits: 'Photo by Firdouss Ross on Unsplash',
  loadablePost,
  publishedAt: new Date('2018-01-08'),
  tags: ['traffic', 'V2I'],
  theme: 'DAY',
  themeColor: 'red',
  title: 'Intersection Control Algorithm',
  updatedAt: null,
}
