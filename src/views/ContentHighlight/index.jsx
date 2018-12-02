import React from 'react'
import { ThemeProvider } from 'styled-components'
import { transparentize as fade } from 'polished'
import PropTypes from 'prop-types'

import Blur from '../../components/Blur'
import Section from '../../components/Section'
import Box from '../../components/Box'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import { marginPropTypes } from '../../styles/space'

const setTheme = theme => ({
  ...theme,
  link: fade(0.3, theme.title),
  surface: theme.surfaceColors.gray,
})

const ContentHighlight = ({
  marginTop,
  marginBottom,
  action,
  author,
  extraAction,
  eyebrow,
  image,
  preload,
  title,
}) => (
  <ThemeProvider theme={setTheme}>
    <Section
      marginTop={marginTop}
      marginBottom={marginBottom}
      position="relative"
      onMouseEnter={preload}
      color="surface"
    >
      <Blur src={image.src} base64={image.base64} opacity={0.6} />
      <Box
        marginLeft="auto"
        marginRight="auto"
        width="content"
        display={{ xs: 'block', lg: 'flex' }}
        position="relative"
      >
        <ImageBox eyebrow={eyebrow} image={image} url={action.url} />
        <TextBox
          action={action}
          artist={author}
          eyebrow={eyebrow}
          extraAction={extraAction}
          title={title}
        />
      </Box>
    </Section>
  </ThemeProvider>
)

ContentHighlight.propTypes = {
  action: PropTypes.shape({
    name: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.string,
  extraAction: PropTypes.shape({
    name: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
  }),
  eyebrow: PropTypes.node,
  image: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  preload: PropTypes.func,
  ...marginPropTypes,
}

export default ContentHighlight
