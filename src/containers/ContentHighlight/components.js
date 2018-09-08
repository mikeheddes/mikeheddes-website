import { css } from 'styled-components'
import Box from 'components/Box'
import { media } from 'utils/mixins'

export default Box.extend`
  display: block;

  ${media.desktop(css`
    display: flex;
  `)};
`
