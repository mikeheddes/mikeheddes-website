import React from 'react';
import Loadable from 'react-loadable';

import { meta as otherMeta } from './other.mdx';

const LoadableOther = Loadable({
  loader: () => import('./other.mdx'),
  render(loaded, props) {
    const Component = loaded.namedExport;
    return <Component {...props} />;
  },
});

// This will be the articleID key and id value nead to be the same.
export default {
  other: {
    id: 'other',
    meta: otherMeta,
    loadablePost: LoadableOther,
  },
};
