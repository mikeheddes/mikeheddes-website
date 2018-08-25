import React from 'react';
import Loadable from 'react-loadable';
import { themes } from 'actions/ui';

import imageCover from 'assets/acastro_180510_1777_siri_0002.0.jpg';

const loadablePost = Loadable({
  loader: () => import('./article.mdx'),
  loading: () => <div />,
});

// Metadata
export default {
  authors: [{ name: 'Nick Statt', url: 'https://theverge.com' }],
  categorie: 'CODE',
  description:
    'Recent hire John Giannandrea is leading all of Apple’s AI efforts now',
  id: 'apple_ml',
  imageCover,
  imageCredits: 'Illustration by Alex Castro / The Verge',
  loadablePost,
  publishedAt: new Date('2018-07-20'),
  tags: ['Apple', 'machine learning'],
  theme: themes.DAY,
  themeColor: 'purple',
  title:
    'Apple’s new AI chief now oversees Siri, Core ML, and machine learning teams',
  updatedAt: null,
};
