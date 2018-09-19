import styled, { css } from 'styled-components'
import Box from 'components/Box'
import { media } from 'utils/mixins'

export default styled(Box)`
  display: block;

  ${media.desktop(css`
    display: flex;
  `)};
`
