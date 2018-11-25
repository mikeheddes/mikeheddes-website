import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import music from '../../content/music'

export const MusicItem = Loadable({
  loader: () => import('./Item'),
  loading: () => null,
})

const MusicRenderer = ({
  match: {
    params: { id },
  },
}) => {
  if (id in music) {
    return <MusicItem {...music[id]} />
  }
  return <div>{id}</div>
}

MusicRenderer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default withRouter(MusicRenderer)
