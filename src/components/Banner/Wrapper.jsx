import styled, { css } from 'styled-components'
import space from 'style/space'
import { media, fluidText } from 'utils/mixins'

const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.heading};
  text-align: center;
  padding-top: ${space.M}px;

  ${media.phoneOnly(css`
    padding-bottom: ${space.s}px;
    padding-top: ${space.xl}px;
  `)};

  & > h2 {
    ${fluidText(18, 27)};
    font-weight: 500;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: ${space.r}px;
    ${media.phoneOnly(css`
      font-weight: 600;
    `)};
  }

  & > h1 {
    ${fluidText(40, 48)};
    font-weight: 700;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: ${({ links }) => (links ? space.xl : space.M)}px;
    ${media.phoneOnly(css`
      padding-bottom: ${space.l}px;
    `)};
  }
`

export default Wrapper
