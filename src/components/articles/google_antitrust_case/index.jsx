import React from 'react';
import Loadable from 'react-loadable';
import { themes } from 'actions/ui';

import imageCover from 'assets/googleDroid.jpg';

const loadablePost = Loadable({
  loader: () => import('./article.mdx'),
  loading: () => <div />,
});

// Metadata
export default {
  authors: [{ name: 'Chaim Gartenberg', url: 'https://theverge.com' }],
  categorie: 'CODE',
  description: 'The $5 billion question(s)',
  id: 'google_antitrust_case',
  imageCover,
  imageCredits: 'Illustration by William Joel / The Verge',
  loadablePost,
  publishedAt: new Date('2018-07-19'),
  tags: ['Google', 'Antitrust'],
  theme: themes.DAY,
  themeColor: 'yellow',
  title:
    'Six questions you were afraid to ask about Google’s EU antitrust case',
  updatedAt: null,
};
