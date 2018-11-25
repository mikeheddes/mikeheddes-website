import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import articles from '../../content/articles'

export const ArticleItem = Loadable({
  loader: () => import('./Item'),
  loading: () => null,
})

const ArticleRenderer = ({
  match: {
    params: { id },
  },
}) => {
  if (id in articles) {
    return <ArticleItem {...articles[id]} />
  }
  return <div>{id}</div>
}

ArticleRenderer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default withRouter(ArticleRenderer)
