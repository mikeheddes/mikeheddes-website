import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Section from '../../components/Section'
import Box from '../../components/Box'
import GridBox from '../../components/GridBox'
import space from '../../styles/space'
import { media } from '../../styles/breakpoints'
import { fluidFont } from '../../styles/mixins'

export const Title = styled.h1`
  ${fluidFont(32, 40)};
  border-bottom: 2px solid ${({ theme }) => theme.borderDivider};
  padding-bottom: ${space.re};
  margin-bottom: ${space.md};
  margin-top: ${space.xm};

  ${media.sm`
    margin-top: 0;
  `};

  ${media.md`
    padding-bottom: ${space.xr};
    margin-bottom: ${space.xm};
  `};
`

const ContentGrid = ({ content, children, title, columns }) => (
  <Section>
    <Box width="content" marginLeft="auto" marginRight="auto">
      <Title>{title}</Title>
      <GridBox columns={columns}>{content && content.map(children)}</GridBox>
    </Box>
  </Section>
)

ContentGrid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.func.isRequired,
  title: PropTypes.string,
  columns: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
  ]),
}

ContentGrid.defaultProps = {
  content: [],
  title: 'All',
  columns: undefined,
}

export default ContentGrid
