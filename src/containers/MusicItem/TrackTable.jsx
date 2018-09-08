import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space } from 'style'

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
  margin-top: ${space.m}px;
`

const Cell = styled.td`
  border-bottom: 2px solid;
  text-align: left;
  border-color: ${({ variation, theme }) =>
    variation === 'number' ? 'transparent' : theme.surface};
  padding: ${space.xr}px;
  font-size: 17px;
  color: ${({ theme }) => theme.textSubtle};

  ${({ variation }) =>
    variation === 'number' &&
    css`
      padding-right: ${space.xm}px;
    `};

  ${({ variation }) =>
    variation === 'title' &&
    css`
      width: 100%;
      padding-left: 0;
      padding-right: 0;

      ${({ height }) =>
        height === 'dubble' &&
        css`
          padding-top: ${space.r}px;
          padding-bottom: ${space.r}px;
        `};
    `};

  ${({ variation }) =>
    variation === 'time' &&
    css`
      text-align: right;
    `};
`

const Title = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`

const Artist = styled.span`
  display: inline-block;
  margin-top: ${space.xs}px;
`

const TrackTable = props => {
  const { tracks, artist } = props
  const hasSameArtists = checkSameArtists(tracks, artist)
  return (
    <Wrapper>
      <tbody>
        {tracks.map((track, i) => (
          <tr key={track.title}>
            <Cell variation="number">{i + 1}</Cell>
            <Cell
              variation="title"
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
            <Cell variation="time">{toTimeStamp(track.duration)}</Cell>
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
