import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media, mapMediaProp } from '../styles/breakpoints'
import space from '../styles/space'

function setColumns(columns) {
  return `grid-template-columns: repeat(${columns}, 1fr);`
}

const GridBox = styled.div`
  display: grid;
  grid-gap: ${space.md};
  ${mapMediaProp('columns', setColumns)}

  ${media.sm`
    grid-gap: ${space.xm};
  `};
`

GridBox.propTypes = {
  columns: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
  ]),
}

GridBox.defaultProps = {
  columns: { xs: 2, sm: 3, md: 4, lg: 5 },
}

export default GridBox
