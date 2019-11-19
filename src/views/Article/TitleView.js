import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { fluidFont } from '../../styles/mixins'
import { contentWrapper } from '../../styles'

const Wrapper = styled.header`
  ${contentWrapper};
  text-align: center;
  margin-top: 15px;
  padding-top: 30px;
  padding-bottom: 30px;

  ${up('md')} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

const Title = styled.h1`
  ${fluidFont(32, 63)};
  color: var(--heading-obvious);
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;

  ${up('md')} {
    margin-bottom: 30px;
  }
`

const DateLocation = styled.h4`
  ${fluidFont(18, 21)};
  color: var(--text-subtle);
  line-height: 1.3;
  font-weight: 600;
`

const dateFormat = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

const TitleView = ({ title, genre, date }) => (
  <Wrapper>
    <Title>{title}</Title>
    <DateLocation>
      {dateFormat.format(new Date(date))} ― {genre}
    </DateLocation>
  </Wrapper>
)

export default React.memo(TitleView)
