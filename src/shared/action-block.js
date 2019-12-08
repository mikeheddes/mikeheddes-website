import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { contentWrapper, fluidFont } from '../styles'

const Wrapper = styled.div`
  padding: 30px 0;
  background-color: var(--surface);
  text-align: center;
`

const Title = styled.h4`
  margin: 0;
  color: hsla(0, 0%, var(--foreground-lightness), 0.6);
  ${fluidFont(18, 21)};
  font-weight: 600;
  margin-bottom: 15px;

  ${up('md')} {
    margin-bottom: 20px;
  }
`

const Grid = styled.div`
  display: block;
  background-color: var(--background);
  border-radius: 10px;
  max-width: 375px;
  margin: 0 auto;

  ${up('sm')} {
    margin: 0;
    max-width: none;
    border-radius: 0px;
    background-color: transparent;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 170px));
    grid-gap: 30px;
    justify-content: center;
  }
`

const ItemWrapper = styled(OutboundLink)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 52px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border-content);
  color: var(--heading-obvious);
  text-decoration: none;
  transition: opacity 100ms ease-out;
  cursor: pointer;

  :active {
    opacity: 0.5;
  }

  :last-child {
    border-bottom: none;
  }

  ${up('sm')} {
    height: auto;
    background-color: var(--background);
    display: block;
    border-radius: 10px;
    padding: 8px;
    border-bottom: none;
  }
`

const IconWrapper = styled.div`
  ${up('sm')} {
    margin: 12px 0 8px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;

    ${up('sm')} {
      width: 34px;
      height: 34px;
    }
  }
`

const Label = styled.div`
  font-weight: 500;
  flex: 1 0 auto;
  text-align: left;
  ${fluidFont(18, 18)};
  margin-right: 15px;

  ${up('sm')} {
    margin-right: 0px;
    text-align: center;
    opacity: 0.5;
    ${fluidFont(13, 14)};
  }
`

const ActionItem = ({ children, icon: Icon, ...restProps }) => {
  return (
    <ItemWrapper {...restProps}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Label>{children}</Label>
    </ItemWrapper>
  )
}

const ActionBlock = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <div css={contentWrapper} wide>
        <Grid>{children}</Grid>
      </div>
    </Wrapper>
  )
}

export { ActionItem }

export default ActionBlock
