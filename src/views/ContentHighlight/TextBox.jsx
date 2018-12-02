import React from 'react'
import PropTypes from 'prop-types'

import { Artist, BadgeDesktop, Link, Title, TextBoxWrapper } from './components'
import Paragraph from '../../components/Paragraph'

const TextBox = ({ action, artist, eyebrow, extraAction, title }) => (
  <TextBoxWrapper>
    <BadgeDesktop
      fillType="fade"
      size="lg"
      marginRight="auto"
      marginBottom="md"
    >
      {eyebrow}
    </BadgeDesktop>
    <Title marginBottom={!artist} maxlines={artist ? 2 : 5}>
      {title}
    </Title>
    {artist && <Artist>{artist}</Artist>}
    <Paragraph>
      <Link to={action.url} icon>
        {action.name}
      </Link>
    </Paragraph>
    {extraAction && (
      <Paragraph marginTop="xr">
        <Link to={extraAction.url} icon>
          {extraAction.name}
        </Link>
      </Paragraph>
    )}
  </TextBoxWrapper>
)

TextBox.propTypes = {
  action: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  extraAction: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  artist: PropTypes.string,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string,
}

TextBox.defaultProps = {
  artist: undefined,
  title: undefined,
  extraAction: undefined,
}

export default TextBox
