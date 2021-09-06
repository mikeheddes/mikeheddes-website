import React, { lazy, useState } from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { screen } from '../../styles/breakpoints'

import Article from '../index'

import { BLUE, RED, GameState } from './jet-fighter'
import Body from './README.md'

const ClientSideOnlyJetFighter = lazy(() => import('./renderer.js'))

const KeyWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;

  @media ${screen.sm} {
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }
`

const Key = styled.div`
  border-radius: 400px;
  color: #000000;
  width: 42px;
  height: 42px;
  font-size: 17px;
  font-weight: 500;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  user-select: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  ${({ lower }) =>
    lower &&
    css`
      margin-top: 25px;
    `}

  :active {
    background-color: ${() => darken(0.05, '#ffffff')};
  }
`

const PlayerIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 15px;
  color: var(--text);
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
    padding-top: 50px;
  }

  @media ${screen.md} {
    padding-top: 80px;
  }
`

function getPlayerNameByGameState(gameState) {
  if (gameState === GameState.START_SCREEN) {
    return 'TBD'
  } else if (gameState === GameState.MULTI_PLAYER) {
    return 'Player 1'
  } else if (gameState === GameState.AI_PLAYER) {
    return 'Artificial Intelligence'
  }
}

const JetFighterPost = ({ data: { postYaml, site, dqnFile } }) => {
  const isSSR = typeof window === 'undefined'
  const [gameState, setGameState] = useState(GameState.START_SCREEN)

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
          <PlayerIndicatorWrapper>
            <div>
              <PlayerColorDot accent={BLUE} />
              {getPlayerNameByGameState(gameState)}
            </div>
            <div style={{ flexGrow: '1' }} />
            <div>
              <PlayerColorDot accent={RED} />
              Player 2
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
                setGameState={setGameState}
                gameState={gameState}
              />
            </React.Suspense>
          )}
          <KeyWrapper>
            <Key lower>a</Key>
            <Key>w</Key>
            <Key lower>d</Key>
            <div css="flex-grow: 1;" />
            <Key lower>←</Key>
            <Key>↑</Key>
            <Key lower>→</Key>
          </KeyWrapper>
        </div>
      </GameWrapper>
      <Body />
    </Article>
  )
}

export default JetFighterPost

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
