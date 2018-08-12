import React from 'react';
import Loadable from 'react-loadable';

import imageCover from 'assets/14_jupiter_carousel_1.0.jpg';

const loadablePost = Loadable({
  loader: () => import('./article.mdx'),
  loading: () => <div />,
});

// Metadata
export default {
  authors: [{ name: 'Loren Grush', url: 'https://theverge.com' }],
  categorie: 'TRAVEL',
  description: 'The total is up to 79 now',
  id: 'jupiter_moons',
  imageCover,
  imageCredits:
    'Image: NASA/JPL-Caltech/SwRI/MSSS/Gerald Eichstädt and Seán Doran',
  loadablePost,
  publishedAt: new Date('2018-07-17'),
  tags: ['NASA', 'Jupiter', 'moons'],
  theme: 'NIGHT',
  themeColor: 'orange',
  title:
    'Astronomers have found a new crop of moons around Jupiter, and one of them is a weirdo',
  updatedAt: null,
};
