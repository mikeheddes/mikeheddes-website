import React from 'react'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

import { fluidFont } from '../../styles/mixins'

const toTimeStamp = milliseconds => {
  const totalSeconds = milliseconds / 1000
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds - minutes * 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const checkSameArtists = (tracks, artist) =>
  tracks.reduce((accumulator, currentValue) => {
    if (currentValue.artist === artist) return accumulator
    return false
  }, true)

const Wrapper = styled.table`
  border-top: 2px solid;
  border-color: ${({ theme }) => theme.surface};
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`

const Cell = styled.td`
  border-bottom: 2px solid;
  text-align: left;
  border-color: ${({ variant, theme }) =>
    variant === 'number' ? 'transparent' : theme.surface};
  padding: 8px;

  ${up('sm')} {
    padding: 15px;
  }

  ${fluidFont(15, 17)};
  color: ${({ theme }) => theme.textSubtle};

  ${({ variant }) =>
    variant === 'number' &&
    css`
      padding-right: 20px;

      ${up('sm')} {
        padding-right: 30px;
      }
    `};

  ${({ variant }) =>
    variant === 'title' &&
    css`
      width: 100%;
      padding-left: 0;
      padding-right: 0;

      ${({ height }) =>
        height === 'dubble' &&
        css`
          padding-top: 8px;
          padding-bottom: 8px;
        `};
    `};

  ${({ variant }) =>
    variant === 'time' &&
    css`
      text-align: right;
    `};
`

const Title = styled.span`
  font-weight: 500;
  ${fluidFont(16, 18)};
  color: ${({ theme }) => theme.text};
`

const Artist = styled.span`
  display: inline-block;
  margin-top: 2px;
`

const TrackTable = props => {
  const { tracks, artist } = props
  const hasSameArtists = checkSameArtists(tracks, artist)

  return (
    <Wrapper>
      <tbody>
        {tracks.map((track, i) => (
          <tr key={track.title}>
            <Cell variant="number">{i + 1}</Cell>
            <Cell
              variant="title"
              height={hasSameArtists ? undefined : 'dubble'}
            >
              <Title>{track.title}</Title>
              {!hasSameArtists && (
                <>
                  <br />
                  <Artist>{track.artist}</Artist>
                </>
              )}
            </Cell>
            <Cell variant="time">{toTimeStamp(track.duration)}</Cell>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  )
}

export default TrackTable
