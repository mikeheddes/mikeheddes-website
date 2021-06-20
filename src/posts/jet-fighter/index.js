import React, { useMemo, useRef, useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Article from '../index'
import Caption from '../../shared/caption'
import { contentWrapper } from '../../styles'

import { JetFighter, useJetFighterUserController } from './jet-fighter'
import Body from './README.md'

const WIDTH = 240
const HEIGHT = 180

const KeyWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
`

const Key = styled.div`
  border: 1px solid var(--border-divider-solid);
  border-radius: 4px;
  padding: 2px 4px;
  display: inline-block;
  margin-right: 4px;
  color: var(--text);
  background-color: var(--surface);
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);

  &:last-child {
    margin-right: 0;
  }
`

const PlayerLine = styled.h2`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--heading);
`

const Post = ({ data: { postYaml, site } }) => {
  const game = useMemo(() => new JetFighter(WIDTH, HEIGHT), [])
  const [gameScore, setGameScore] = useState(game.score)
  const canvasRef = useRef(null)
  const getUser1Action = useJetFighterUserController('a', 'd', 'w')
  const getUser2Action = useJetFighterUserController(
    'arrowleft',
    'arrowright',
    'arrowup'
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = WIDTH
    canvas.height = HEIGHT

    game.onscorechange = (score) => setGameScore(score)

    let animationRequest

    function gameLoop() {
      const user1Action = getUser1Action()
      const user2Action = getUser2Action()

      // Get actions from AI and player
      const actions = [user1Action, user2Action]
      game.step(actions)
      game.draw(ctx)

      animationRequest = window.requestAnimationFrame(gameLoop)
    }

    animationRequest = window.requestAnimationFrame(gameLoop)

    return () => {
      window.cancelAnimationFrame(animationRequest)
    }
  }, [game, getUser1Action, getUser2Action])

  return (
    <Article
      {...postYaml}
      siteUrl={site.siteMetadata.siteUrl}
      slug={postYaml.fields.slug}
      imageSquare={postYaml.imageSquare.light.childImageSharp.resize.src}
      imageWide={postYaml.imageWide.light.childImageSharp.resize.src}
    >
      <div css={contentWrapper}>
        <div
          style={{
            width: '100%',
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50,
          }}
        >
          <PlayerLine>
            <span
              style={{
                width: '30%',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  backgroundColor: '#5085ff',
                  width: 12,
                  height: 12,
                  marginRight: 8,
                  display: 'inline-block',
                  borderRadius: 100,
                }}
              />
              Player 1
            </span>
            <span
              style={{
                textAlign: 'center',
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              {gameScore[0]} – {gameScore[1]}
            </span>
            <span
              style={{
                width: '30%',
                textAlign: 'right',
              }}
            >
              Player 2
              <div
                style={{
                  backgroundColor: '#ff5050',
                  width: 12,
                  height: 12,
                  marginLeft: 8,
                  display: 'inline-block',
                  borderRadius: 100,
                }}
              />
            </span>
          </PlayerLine>
          <canvas
            ref={canvasRef}
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid rgb(0 0 0 / 10%)',
              width: '100%',
              imageRendering: 'pixelated',
            }}
          />
          <KeyWrapper>
            <Key>a</Key>
            <Key>w</Key>
            <Key>d</Key>
            <div css="flex-grow: 1;" />
            <Key>←</Key>
            <Key>↑</Key>
            <Key>→</Key>
          </KeyWrapper>
        </div>
      </div>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
