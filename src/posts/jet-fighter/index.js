import React, { lazy, useState, useContext } from 'react'
import { graphql } from 'gatsby'
import styled, { css, ThemeContext } from 'styled-components'
import { transparentize, darken, lighten } from 'polished'

import { screen } from '../../styles/breakpoints'

import Article from '../index'

import { BLUE, RED } from './jet-fighter'
import Body from './README.md'

const ClientSideOnlyJetFighter = lazy(() => import('./renderer.js'))

const OpponentButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  text-align: center;
  width: 68%;
  margin-left: auto;
  margin-right: auto;
  gap: 8px;
`

const OpponentButton = styled.div`
  width: 50%;
  padding: 6px 12px;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.surfaceObvious : BLUE};
  transition: background-color 0.2s ease-in-out;
  cursor: ${({ isActive }) => (isActive ? 'auto' : 'pointer')};
  box-shadow: 0 1px 1px
    ${({ isActive, theme }) =>
      transparentize(
        0.65,
        darken(0.4, isActive ? theme.surfaceObvious : BLUE)
      )};

  ${({ isActive }) =>
    !isActive &&
    css`
      :hover {
        background-color: ${lighten(0.05, BLUE)};
      }

      :active {
        background-color: ${darken(0.05, BLUE)};
      }
    `}
`

const KeyWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;

  @media ${screen.sm} {
    padding-left: 50px;
    padding-right: 50px;
  }
`

const Key = styled.div`
  border-radius: 400px;
  margin-right: 4px;
  color: #ffffff;
  width: 36px;
  height: 36px;
  font-size: 17px;
  font-weight: 500;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 1px
    ${({ accent }) => transparentize(0.65, darken(0.4, accent))};
  background-color: ${({ accent }) => accent};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  ${({ lower }) =>
    lower &&
    css`
      margin-top: 15px;
    `}

  :hover {
    background-color: ${({ accent }) => lighten(0.05, accent)};
  }

  :active {
    background-color: ${({ accent }) => darken(0.05, accent)};
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${screen.md} {
    border-radius: 4px;
    width: 32px;
    height: 28px;

    ${({ lower }) =>
      lower &&
      css`
        margin-top: 8px;
      `}
  }
`

const PlayerIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 6px 15px;
  color: var(--text);

  @media ${screen.sm} {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const PlayerColorDot = styled.span`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 100px;
  margin-right: 4px;
  background-color: ${({ accent }) => accent};
`

const GameWrapper = styled.div`
  padding-top: 20px;
  background-color: var(--surface-subtle);
  overflow: auto;

  @media ${screen.sm} {
    padding-top: 30px;
  }

  @media ${screen.md} {
    padding-top: 50px;
  }
`

const Post = ({ data: { postYaml, site, dqnFile } }) => {
  const isSSR = typeof window === 'undefined'
  const [isMultiplayer, setIsMultiplayer] = useState(false)

  const theme = useContext(ThemeContext)

  return (
    <Article
      {...postYaml}
      siteUrl={site.siteMetadata.siteUrl}
      slug={postYaml.fields.slug}
      imageSquare={postYaml.imageSquare.light.childImageSharp.resize.src}
      imageWide={postYaml.imageWide.light.childImageSharp.resize.src}
    >
      <GameWrapper>
        <div
          style={{
            width: '100%',
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <OpponentButtonWrapper>
            <OpponentButton
              onClick={() => setIsMultiplayer(false)}
              isActive={!isMultiplayer}
            >
              AI Opponent
            </OpponentButton>
            <OpponentButton
              onClick={() => setIsMultiplayer(true)}
              isActive={isMultiplayer}
            >
              Multiplayer
            </OpponentButton>
          </OpponentButtonWrapper>
          <PlayerIndicatorWrapper>
            <div>
              <PlayerColorDot accent={BLUE} />
              {isMultiplayer ? 'Player 2' : 'Artificial Intelligence'}
            </div>
            <div css="flex-grow: 1;" />
            <div>
              <PlayerColorDot accent={RED} />
              Player 1
            </div>
          </PlayerIndicatorWrapper>
          {!isSSR && (
            <React.Suspense
              fallback={
                <div
                  style={{
                    backgroundColor: '#000000',
                    width: '100%',
                    paddingBottom: '75%',
                    display: 'block',
                  }}
                />
              }
            >
              <ClientSideOnlyJetFighter
                dqnFileURL={dqnFile.publicURL}
                isMultiplayer={isMultiplayer}
              />
            </React.Suspense>
          )}
          <KeyWrapper>
            <Key accent={isMultiplayer ? BLUE : theme.surfaceObvious} lower>
              a
            </Key>
            <Key accent={isMultiplayer ? BLUE : theme.surfaceObvious}>w</Key>
            <Key accent={isMultiplayer ? BLUE : theme.surfaceObvious} lower>
              d
            </Key>
            <div css="flex-grow: 1;" />
            <Key accent={RED} lower>
              ←
            </Key>
            <Key accent={RED}>↑</Key>
            <Key accent={RED} lower>
              →
            </Key>
          </KeyWrapper>
        </div>
      </GameWrapper>
      <Body />
    </Article>
  )
}

export default Post

export const pageQuery = graphql`
  query jetFighterData($id: String!) {
    postYaml(id: { eq: $id }) {
      title
      description
      date
      genre
      fields {
        slug
      }
      imageSquare: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 1080) {
              src
            }
          }
        }
      }
      imageWide: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 2160) {
              src
            }
          }
        }
      }
    }
    dqnFile: file(relativePath: { eq: "jet-fighter/dqn.onnx" }) {
      publicURL
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
