import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { InternButton, ExternButton } from 'components/Buttons'
import ForwardSVG from 'svg/Forward'
import ExitSVG from 'svg/Exit'

class Action extends Component {
  render() {
    const { actions, id, contentType, colorName } = this.props;
    const exitText = contentType == 'music' ? 'Listen': '';
    const internText = contentType == 'music' ? 'More info': 'Read article';
    return(
      <div className="buttons">
        {actions && actions.length > 0 ?
          [<ExternButton round href={actions[0].url} color={colorName || undefined} key={0}>
            {exitText} on {actions[0].name}<ExitSVG/>
          </ExternButton>, <br key={1}/>] : null
        }
        <InternButton round to={`/${contentType}/${id}`} color={colorName || undefined}>
          {internText}<ForwardSVG/>
        </InternButton>
      </div>
    )
  }
}

Action.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  id: PropTypes.string.isRequired,
  contentType: PropTypes.oneOf(['article', 'music']).isRequired,
  colorName: PropTypes.string,
}

export default Action
