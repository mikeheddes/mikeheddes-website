import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { space } from '../../styles'
import { fluidFont } from '../../styles/mixins'
import { media } from '../../styles/breakpoints'

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
  margin-top: ${space.md};
`

const Cell = styled.td`
  border-bottom: 2px solid;
  text-align: left;
  border-color: ${({ variant, theme }) =>
    variant === 'number' ? 'transparent' : theme.surface};
  padding: ${space.re};

  ${media.sm`
    padding: ${space.xr};
  `};

  ${fluidFont(15, 17)};
  color: ${({ theme }) => theme.textSubtle};

  ${({ variant }) =>
    variant === 'number' &&
    css`
      padding-right: ${space.md};

      ${media.sm`
        padding-right: ${space.xm};
      `};
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
          padding-top: ${space.re};
          padding-bottom: ${space.re};
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
  margin-top: ${space.xs};
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
                <React.Fragment>
                  <br />
                  <Artist>{track.artist}</Artist>
                </React.Fragment>
              )}
            </Cell>
            <Cell variant="time">{toTimeStamp(track.duration)}</Cell>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  )
}

TrackTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    })
  ).isRequired,
  artist: PropTypes.string.isRequired,
}

export default TrackTable
