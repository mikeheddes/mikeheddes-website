import React from 'react'

import articles from '../../content/articles'
import ContentHighlight from './Loadable'

const latestArticle = Object.values(articles).sort(
  (a, b) => b.publishedAt - a.publishedAt
)[0]

export default props => (
  <ContentHighlight
    {...props}
    eyebrow="Latest article"
    action={{ name: 'Read article', url: latestArticle.url }}
    image={latestArticle.imageCover}
    title={latestArticle.title}
    preload={latestArticle.body.preload}
  />
)
