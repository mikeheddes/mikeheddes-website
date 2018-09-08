import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import ArticlesOverview from 'containers/ArticlesOverview/Loadable'
import MusicOverview from 'containers/MusicOverview/Loadable'
import MusicItem from 'containers/MusicItem/Loadable'
import ArticlesItem from 'containers/ArticlesItem/Loadable'
import { contentTypes } from 'actions/content'

const overviewPages = {
  music: MusicOverview,
  articles: ArticlesOverview,
}

const itemPages = {
  music: MusicItem,
  articles: ArticlesItem,
}

const ContentRouter = props => {
  const { match } = props
  const { contentType } = match.params
  const OverviewPage = overviewPages[contentType]
  const ItemPage = itemPages[contentType]
  return (
    <React.Fragment>
      <Route exact path={`${match.path}/`} component={OverviewPage} />
      <Route path={`${match.path}/:id`} component={ItemPage} />
    </React.Fragment>
  )
}

ContentRouter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      contentType: PropTypes.oneOf(contentTypes).isRequired,
    }).isRequired,
  }).isRequired,
}

export default ContentRouter
